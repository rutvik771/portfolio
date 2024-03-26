import { useState ,useEffect} from "react";
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic to load React Quill client-side
import "react-quill/dist/quill.snow.css";
import { IoMdUndo,IoMdRedo } from "react-icons/io";
// Dynamic import ReactQuill to ensure it's only loaded on the client-side
const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <p>Loading Quill editor...</p>,
 });

 // Define modules and formats
const modules = {
  toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      [{ 'undo': <IoMdUndo/> }, { 'redo': <IoMdRedo /> }], // Specify custom icons for undo and redo buttons
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
      {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
  ],
  clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
  }
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

const Editor = ({
  value,
  setValue,
  preview,
  setPreview
}) => {

  useEffect(() => {
    // Ensure that React Quill is loaded on the client-side
    const Quill = require('react-quill');
    if (Quill && typeof window !== 'undefined') {
        // You can do additional setup here if needed
    }
}, []);

  return (
    <>
    <ReactQuill
      className="editor"
      modules={modules}
      formats={formats}
      theme="snow"
      value={value}
      onChange={(value) => setValue(value)}
    />
    </>
  );
};



export default Editor;