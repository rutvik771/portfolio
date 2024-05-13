import React, { useState, useEffect } from "react";
import { Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import moment from "moment";
import Editor from "../Editor/Editor";
import {
  addData,
  uploadFile,
  updateData,
} from "@/firebase/firestore/controller";
import ViewBlog from "./ViewBlog";
import { title } from "process";

type BlogData = {
  slug: string;
  thumbnail_img_url: string;
  title: string;
  techStack: string | string[];
  content: string;
  publishDate: string;
};

const BlogPost = () => {
  const router = useRouter();
  const [blogData, setBlogData] = useState<BlogData>({
    slug: "",
    thumbnail_img_url: "",
    title: "",
    techStack: "",
    content: "",
    publishDate: moment().format("LL"),
  });
  const [preview, setPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function generateSlug(title: string) {
    // Remove special characters, convert spaces to hyphens, and convert to lowercase
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return slug;
  }
  const handlePublishBlog = async () => {
    let slug = generateSlug(blogData.title);
    const imgURL = await uploadFile(selectedImage);
    const data = {
      ...blogData,
      slug: slug,
      thumbnail_img_url: imgURL,
    };
    const { result, error } = await addData("blogs", slug, data);
    router.push(`/blog`);
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
                {selectedImage && (
                  <img
                    className="blog-thumbnail"
                    src={URL.createObjectURL(selectedImage)}
                    alt="tech"
                  />
                )}
                <input
                  className="upload-img-btn"
                  type="file"
                  accept="image/*"
                  placeholder="Upload Image"
                  onChange={(e: any) => {
                    setSelectedImage(e.target.files[0]);
                  }}
                />
              </div>
              <div>
                <h2 className="text-center text-3xl	py-2">Title</h2>
                <Textarea
                  variant={"unstyled"}
                  w={"30em"}
                  bg={"#222629"}
                  p={"1em"}
                  mt={4}
                  onChange={(e) => {
                    setBlogData({ ...blogData, title: e.target.value });
                  }}
                  value={blogData?.title}
                  placeholder="Here is a title"
                  size="lg"
                />
              </div>
              <div>
                <h2 className="text-center text-3xl	py-2">Tech Stack</h2>
                <Textarea
                  variant={"unstyled"}
                  value={blogData.techStack}
                  w={"30em"}
                  bg={"#222629"}
                  p={"1em"}
                  mt={4}
                  onChange={(e) => {
                    setBlogData({
                      ...blogData,
                      techStack: e.target.value.split(","),
                    });
                  }}
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
