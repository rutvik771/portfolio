import BlogPost from "@/Components/Blog/BlogPost";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CreateBlog = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = checkPassword();
    if (!isAuthenticated) {
      return;
    }
    setIsAuthenticated(true);
  }, []);
  const checkPassword = () => {
    const password = prompt("Enter your password:");
    // You can replace 'yourPassword' with your actual password
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      return true;
    } else {
      router.push("/"); // Redirect to home page
      return false;
    }
  };
  return (
    <div id="blog">
      {!isAuthenticated ? <div className="h-screen"><h1>Unauthorized Access</h1></div> : <BlogPost />}
    </div>
  );
};

export default CreateBlog;
