import React,{useEffect} from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";


const ViewBlog = ({
  blogData,
  setBlogData,
  preview,
  setPreview,
  handlePublishBlog,
}: any) => {

  useEffect(() => {
    // Highlight code snippets after component mounts
    const highlightedContent: any = highlightCodeSnippets(blogData?.content);
    // Set the modified content with highlighted code snippets
    let selector = document.querySelector(".preview-content") as any;
    selector.innerHTML = highlightedContent;
  }, [blogData.content]);

  
  // Function to highlight code snippets within HTML content
  const highlightCodeSnippets = (content: any) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;

    // Select all <pre> elements containing code snippets
    const codeSnippets = tempElement.querySelectorAll("pre");

    // Apply syntax highlighting to each code snippet
    codeSnippets.forEach((snippet) => {
      hljs.highlightBlock(snippet);
    });

    // Return the modified HTML content with highlighted code snippets
    return tempElement.innerHTML;
  };
  return (
    <div className="preview-container">
      <div>
        <h1 className="text-center text-4xl font-bold">{blogData.title}</h1>
        <div
        className="preview-content"
        dangerouslySetInnerHTML={{ __html: blogData.content }}
        >
        </div>
        <div className="flex justify-end	gap-3 mt-6">
          <button
            className="primary-btn pt-14"
            type="button"
            onClick={() => {
              setPreview(false);
            }}
          >
            Edit
          </button>
          <button
            className="primary-btn"
            type="button"
            onClick={() => {
              handlePublishBlog();
            }}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
