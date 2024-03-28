import BlogPost from "@/Components/Blog/BlogPost";
import { useRouter } from "next/router";
import React from "react";
import Link from 'next/link';

const index = () => {
  const router = useRouter();
  return (
    <div id="blog">
      <div>
          <h2 className="text-center text-3xl py-3">Blog</h2>
        <div className="flex">
          <button
            className="primary-btn"
            type="button"
            onClick={() => {
              router.push("/blog/create-blog");
            }}
          >
            Create Post
          </button>
        </div>
        <div>
          <div className="blog-container">
            <div className="blog-grid">
              {/* {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <a className={styles.card}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </a>
          </Link>
        ))} */}
        <Link key='1' href={`/blogs/${2}`}>
            <div className="blog-card">
              <h2>tech</h2>
              <p>dnsnfndfsdfndks</p>
            </div>
          </Link>
          <Link key='2' href={`/blogs/${2}`}>
            <div className="blog-card">
              <h2>tech1</h2>
              <p>sfdndgdgjgjd</p>
            </div>
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
