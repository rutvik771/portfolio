import React, { useState, useEffect } from "react";
import Editor from "../Editor/Editor";
import {addData,getDataById,getAllData} from "@/firebase/firestore/controller";


const BlogPost = () => {
  const [value, setValue] = useState("");
  const [preview, setPreview] = useState(false);
  const handleForm = async () => {
    const data = {
      blogData: value
    }
    const { result, error } = await addData('users', '4', data);
    console.log(result,"result");
    

    if (error) {
      return console.log(error)
    }
  }
  const getData = async () => {
    try {
      const { result, error } = await getDataById('users', '4');
      
      if (error) {
        console.error("Error fetching document:", error);
        return; // Exit the function early if there's an error
      }
  
      if (result?.exists()) {
        const userData = result.data(); // Access the data of the document
        console.log("Document data:", userData);
        // Now you can do something with the retrieved data
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
  const getAllBlogs = async () => {
    try {
      const blogs = await getAllData('users');
      
    console.log(blogs,"blogs");
    
    } catch (error) {
      console.error("Error occurred:", error);
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
          <button className="primary-btn" type="button" onClick={() =>{getAllBlogs()}}>Get data</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPost;
