import BlogPost from "@/Components/Blog/BlogPost";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllData } from "@/firebase/firestore/controller";
import Loader from "@/Components/Loader";

const index = () => {
  const router = useRouter();
  const [blogList, setBlogList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    setIsLoading(true);
    try {
      const blogs = await getAllData("blogs");
      if (blogs) {
        setBlogList(blogs);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error occurred:", error);
      setIsLoading(false);
    }
  };
  const imageLoader = ({ src }: any) => {
    return `${src}?q=${100}`;
  };
  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div id="blog">
          <div className="w-full p-8">
            {blogList.length === 0 ? (
              <div className="blog-not-found">
                <h2 className="text-3xl font-bold	 text-center py-4">
                  No Blogs Found
                </h2>
              </div>
            ) : (
              <>
                <div className="flex justify-center">
                  <div className="w-9/12 text-center">
                    <h2 className="text-3xl font-bold	">Hey, I'm Rutvik 👋</h2>
                    <p className="text-lg font-normal py-2 primary-text">
                      Welcome to my blog where I share my thoughts on software
                      engineering, programming, and technology. I write about my
                      experiences in the tech industry, programming languages,
                      and tools that I use. I also share my thoughts on software
                      engineering practices and principles.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="blog-container">
                    <div className="blog-grid">
                      {blogList.map((blog: any) => (
                        <Link
                          key={blog.id}
                          target="_blank"
                          href={`/blog/${blog.id}`}
                        >
                          <div className="blog-card">
                            <Image
                              loader={imageLoader}
                              className="blog-thumbnail"
                              src={
                                blog?.thumbnail_img_url
                                  ? blog?.thumbnail_img_url
                                  : "/assets/blog-thumnail.jpeg"
                              }
                              alt="tech"
                              width={500}
                              height={250}
                            />
                            <div className="p-4">
                              <h2 className="primary-text text-xl font-bold	">
                                {blog.title}
                              </h2>
                              <div className="flex justify-between pt-2">
                                <div className="flex gap-3">
                                  {blog.techStack &&
                                    blog.techStack?.map((tech: any) => (
                                      <p className="secondary-text text-lg font-normal	">
                                        {tech}
                                      </p>
                                    ))}
                                </div>
                                <p className="primary-text">
                                  {blog?.publishDate}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
