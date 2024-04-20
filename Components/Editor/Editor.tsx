import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic to load React Quill client-side
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading Quill editor...</p>,
});

const Editor = ({ blogData, setBlogData }: any) => {
  return (
    <div>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/github.min.css"
        />
      </Head>
      <EditorToolbar />
      <ReactQuill
        className="editor"
        modules={modules}
        formats={formats}
        theme="snow"
        value={blogData.content || ""}
        onChange={(value) => setBlogData({ ...blogData, content: value })}
      />
    </div>
  );
};

export default Editor;
