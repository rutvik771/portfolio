import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Textarea } from "@chakra-ui/react";
import ViewBlog from "@/Components/Blog/ViewBlog";
import {
  addData,
  getDataById,
  updateData,
} from "@/firebase/firestore/controller";
import Editor from "@/Components/Editor/Editor";

const EditBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState<any>(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const { result, error } = await getDataById("blogs", id);

      if (error) {
        console.error("Error fetching document:", error);
        return; // Exit the function early if there's an error
      }

      if (result?.exists()) {
        const userData: any = result.data();
        setBlogData(userData);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handlePublishBlog = async () => {
    const data = {
      ...blogData,
      title: blogData.title,
      techStack: blogData.techStack,
      content: blogData.content,
    };
    const { result, error } = await updateData("blogs", blogData?.slug, data);
    router.push(`/blog`);
    if (error) {
      return console.log(error);
    }
  };
  console.log(blogData, "blogData");
  
  return (
    <div id="blog">
      {preview ? (
        <ViewBlog
          blogData={blogData}
          setBlogData={setBlogData}
          preview={preview}
          setPreview={setPreview}
          handlePublishBlog={handlePublishBlog}
        />
      ) : 
        
          blogData &&
          <div className="editor-container">
            <div className="flex justify-center my-3">
              <div>
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
                    value={blogData.title}
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
      }
    </div>
  );
};

export default EditBlog;
