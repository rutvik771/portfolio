import React from "react";

const ViewBlog = ({
  blogData,
  setBlogData,
  preview,
  setPreview,
  handlePublishBlog,
}: any) => {
  return (
    <div className="preview-container">
      <div>
        <h1 className="text-center text-4xl font-bold">{blogData.title}</h1>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></div>
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
