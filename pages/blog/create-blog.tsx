import BlogPost from '@/Components/Blog/BlogPost'
import React,{useEffect,useState} from 'react'
import { useRouter } from "next/router";

const createBlog = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const myPassword = process.env.NEXT_PUBLIC_PASSWORD;
console.log(myPassword);

  useEffect(() => {
    const isAuthenticated = checkPassword();
    if (!isAuthenticated) {
      return;
    }
    setIsAuthenticated(true);
  }, []);
  const checkPassword = () => {
    const password = prompt('Enter your password:');
    // You can replace 'yourPassword' with your actual password
    if (password === myPassword) {
      return true;
    } else {
      router.push('/'); // Redirect to home page
      return false;
    }
  };
  return (
    <div id='blog'>
      {
        !isAuthenticated ? (
          <h1>Unauthorized Access</h1>
        ) : (
          <BlogPost/>
        )
      }
    </div>
  )
}

export default createBlog