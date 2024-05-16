import React, { useEffect, useState } from "react";
import Head from "next/head";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useRouter } from "next/router";
import {
  addData,
  getDataById,
  getAllData,
} from "@/firebase/firestore/controller";
import Loader from "@/Components/Loader";

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState<any>({
    slug: "",
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    // Highlight code snippets after component mounts
    const highlightedContent: any = highlightCodeSnippets(blogData?.content);
    // Set the modified content with highlighted code snippets
    let selector = document.querySelector(".preview-content") as any;
    selector.innerHTML = highlightedContent;
  }, [blogData.content]);

  const getData = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
    } catch (error) {
      console.error("Error occurred:", error);
      setIsLoading(false);
    }
  };
  // Function to highlight code snippets within HTML content
  const highlightCodeSnippets = (content: any) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;

    // Select all <pre> elements containing code snippets
    const codeSnippets = tempElement?.querySelectorAll("pre");

    // Apply syntax highlighting to each code snippet
    codeSnippets?.forEach((snippet) => {
      hljs.highlightBlock(snippet);
    });

    // Return the modified HTML content with highlighted code snippets
    return tempElement.innerHTML;
  };
  
  return (
    <>
      {isLoading && blogData ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
        <Head>
            <title>{blogData.title ? blogData.title : 'Blogs'}</title>
            <meta name="description" content={blogData.title ? blogData.title : 'Blogs'} />
            <meta name="keywords" content={blogData?.techStack ? blogData?.techStack?.toString() : ""} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Rutvik Patel" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <div id="blog">
            <div className="preview-container">
              <div>
                <h1 className="text-center heading">
                  {blogData.title}
                </h1>
                <div className="preview-content"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
