import BlogPost from "@/Components/Blog/BlogPost";
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
  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div id="blog">
          <div className="w-full p-8">
            <div className="flex justify-center">
              <div className="w-9/12 text-center">
                <h2 className="text-3xl font-bold	">Hey, I'm Rutvik 👋</h2>
                <p className="text-lg font-normal py-2">
                  Welcome to my blog where I share my thoughts on software
                  engineering, programming, and technology. I write about my
                  experiences in the tech industry, programming languages, and
                  tools that I use. I also share my thoughts on software
                  engineering practices and principles.
                </p>
              </div>
            </div>
            <div>
              <div className="blog-container">
                <div className="blog-grid">
                  {blogList.map((blog:any) => (
                    <Link key={blog.id} href={`/blog/${blog.id}`}>
                      <div className="blog-card">
                        <img
                          className="blog-thumbnail"
                          src={
                            blog?.thumbnail_img_url
                              ? blog?.thumbnail_img_url
                              : "/assets/blog-thumnail.jpeg"
                          }
                          alt="tech"
                        />
                        <div className="p-4">
                          <h2 className="primary-text text-xl font-bold	">
                            {blog.title}
                          </h2>
                          <div className="flex justify-between pt-2">
                            <div className="flex gap-3">
                              {blog.techStack.map((tech:any) => (
                                <p className="secondary-text text-lg font-normal	">
                                  {tech}
                                </p>
                              ))}
                            </div>
                            <p className="primary-text">{blog?.publishDate}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {/* <Link key="1" href={`/blogs/${2}`}>
                <div className="blog-card">
                  <img
                    className="blog-thumbnail"
                    src="/assets/blog-thumnail.jpeg"
                    alt="tech"
                    width={500}
                    height={180}
                  />
                  <div className="p-4">
                    <h2 className="primary-text text-xl font-bold	">
                      Building In-Memory Cache in Go
                    </h2>
                    <div className="flex justify-between pt-2">
                      <p className="secondary-text text-lg font-normal	">
                        Node js , React js
                      </p>
                      <p className="primary-text">25 jan 2024</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link key="1" href={`/blogs/${2}`}>
                <div className="blog-card">
                  <img
                    className="blog-thumbnail"
                    src="/assets/blog-thumnail.jpeg"
                    alt="tech"
                    width={500}
                    height={180}
                  />
                  <div className="p-4">
                    <h2 className="primary-text text-xl font-bold	">
                      Building In-Memory Cache in Go
                    </h2>
                    <div className="flex justify-between pt-2">
                      <p className="secondary-text text-lg font-normal	">
                        Node js , React js
                      </p>
                      <p className="primary-text">25 jan 2024</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link key="1" href={`/blogs/${2}`}>
                <div className="blog-card">
                  <img
                    className="blog-thumbnail"
                    src="/assets/blog-thumnail.jpeg"
                    alt="tech"
                    width={500}
                    height={180}
                  />
                  <div className="p-4">
                    <h2 className="primary-text text-xl font-bold	">
                      Building In-Memory Cache in Go
                    </h2>
                    <div className="flex justify-between pt-2">
                      <p className="secondary-text text-lg font-normal	">
                        Node js , React js
                      </p>
                      <p className="primary-text">25 jan 2024</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link key="1" href={`/blogs/${2}`}>
                <div className="blog-card">
                  <img
                    className="blog-thumbnail"
                    src="/assets/blog-thumnail.jpeg"
                    alt="tech"
                    width={500}
                    height={180}
                  />
                  <div className="p-4">
                    <h2 className="primary-text text-xl font-bold	">
                      Building In-Memory Cache in Go
                    </h2>
                    <div className="flex justify-between pt-2">
                      <p className="secondary-text text-lg font-normal	">
                        Node js , React js
                      </p>
                      <p className="primary-text">25 jan 2024</p>
                    </div>
                  </div>
                </div>
              </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
