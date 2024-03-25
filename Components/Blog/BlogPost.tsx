import React, { useState, useEffect } from "react";
import Editor from "../Editor/Editor";

const BlogPost = () => {
  const [value, setValue] = useState("");
  const [preview, setPreview] = useState(false);
  return (
    <>
      {preview ? (
        <div className="preview-container">
          <h2 className="text-center text-3xl	py-2">Preview</h2>
          <div dangerouslySetInnerHTML={{ __html: value }}></div>
          <button className="pt-14" type="button" onClick={() =>{setPreview(false)}}>Edit</button>  
        </div>
      ) : (
        <div className="editor-container">
          <h2 className="text-center text-3xl	py-2">Add Your Content</h2>
          <Editor
            value={value}
            setValue={setValue}
            preview={preview}
            setPreview={setPreview}
          />
          <button className="pt-14" type="button" onClick={() =>{setPreview(true)}}>Preview</button>
        </div>
      )}
    </>
  );
};

export default BlogPost;
