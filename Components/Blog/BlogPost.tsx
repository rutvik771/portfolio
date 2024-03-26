import React, { useState, useEffect } from "react";
import Editor from "../Editor/Editor";
import addData from "@/firebase/firestore/addData";


const BlogPost = () => {
  const [value, setValue] = useState("");
  const [preview, setPreview] = useState(false);
  const handleForm = async () => {
    const data = {
      blogData: value
    }
    const { result, error } = await addData('users', 'user-id', data);
    console.log(result,"result");
    

    if (error) {
      return console.log(error)
    }
  }
  return (

    <>
      {preview ? (
        <div className="preview-container">
          <h2 className="text-center text-3xl	py-2">Preview</h2>
          <div dangerouslySetInnerHTML={{ __html: value }}></div>
          <button className="primary-btn pt-14" type="button" onClick={() =>{setPreview(false)}}>Edit</button>  
        </div>
      ) : (
        <div className="editor-container">
          <div>
          <h2 className="text-center text-3xl	py-2">Add Your Content</h2>
          <Editor
            value={value}
            setValue={setValue}
            preview={preview}
            setPreview={setPreview}
          />
          </div>
          <div className="pt-12">
          <button className="primary-btn" type="button" onClick={() =>{setPreview(true)}}>Preview</button>
          <button className="primary-btn" type="button" onClick={() =>{handleForm()}}>submit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPost;
