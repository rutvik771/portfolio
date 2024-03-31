import React, { useState, useEffect } from "react";
import { Textarea } from "@chakra-ui/react";
import moment from "moment";
import Editor from "../Editor/Editor";
import {
  addData,
  uploadFile,
  getAllData,
} from "@/firebase/firestore/controller";
import ViewBlog from "./ViewBlog";

const BlogPost = () => {
  const [value, setValue] = useState("");
  const [blogData, setBlogData] = useState({
    slug: "",
    thumbnail_img_url: "",
    title:'',
    techStack:'',
    content:'',
    publishDate: moment().format('LL'),
  })
  const [preview, setPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  function generateSlug(title: string) {
    // Remove special characters, convert spaces to hyphens, and convert to lowercase
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return slug;
}

  const handlePublishBlog = async () => {
    let slug = generateSlug(blogData.title);

    const imgURL = await uploadFile(selectedImage);
    const data = {
      ...blogData,
      slug:slug,
      thumbnail_img_url: imgURL,
    };
    console.log(data, "data");
    // return
    const { result, error } = await addData("blogs", slug , data);
    console.log(result, "result");

    if (error) {
      return console.log(error);
    }
  };

 
  return (
    <>
      {preview ? (
        <ViewBlog
              blogData={blogData}
              setBlogData={setBlogData}
              preview={preview}
              setPreview={setPreview}
              handlePublishBlog={handlePublishBlog}

        />
      ) : (
        <div className="editor-container">
          <div className="flex justify-center my-3">
            <div>
            <div>
              {
                selectedImage && (
                  <img
                    className="blog-thumbnail"
                    src={URL.createObjectURL(selectedImage)}
                    alt="tech"
                  />
                )
              }
              <input
                className="upload-img-btn"
                type="file"
                accept="image/*"
                placeholder="Upload Image"
                onChange={(e) => {
                  setSelectedImage(e.target.files[0]);
                }}
              />
            </div>
            <div>
              <h2 className="text-center text-3xl	py-2">Title</h2>
              <Textarea
                variant={"unstyled"}
                // value={value}
                w={"30em"}
                bg={"#222629"}
                p={"1em"}
                mt={4}
                onChange={(e) => {setBlogData({...blogData, title:e.target.value})}}
                placeholder="Here is a title"
                size="lg"
              />
            </div>
            <div>
              <h2 className="text-center text-3xl	py-2">Tech Stack</h2>
              <Textarea
                variant={"unstyled"}
                // value={value}
                w={"30em"}
                bg={"#222629"}
                p={"1em"}
                mt={4}
                onChange={(e) => {setBlogData({...blogData, techStack:(e.target.value.split(","))})}}
                placeholder="Here is a tech Stack"
                size="lg"
              />
            </div>
            </div>
          </div>
          <div>
            <h2 className="text-center text-3xl	py-4">Add Your Content</h2>
            <Editor
              blogData={blogData}
              setBlogData={setBlogData}
              preview={preview}
              setPreview={setPreview}
            />
          </div>
          <div className="pt-12">
            <button
              className="primary-btn"
              type="button"
              onClick={() => {
                setPreview(true);
              }}
            >
              Preview
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPost;
