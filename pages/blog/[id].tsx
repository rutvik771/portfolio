import React,{useEffect,useState} from 'react'
import { useRouter } from "next/router";
import {
    addData,
    getDataById,
    getAllData,
  } from "@/firebase/firestore/controller";

const blog = () => {
    const router = useRouter();
    const {id} = router.query;
    const [blogData, setBlogData] = useState({
        slug: "",
        title:'',
        content:'',
      })
      
      useEffect(() => {
        getData();
      }, [id])
      
    const getData = async () => {
        try {
          const { result, error } = await getDataById("blogs", id);
    
          if (error) {
            console.error("Error fetching document:", error);
            return; // Exit the function early if there's an error
          }
    
          if (result?.exists()) {
            const userData = result.data(); // Access the data of the document
            console.log("Document data:", userData);
              setBlogData(userData)
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error occurred:", error);
        }
      };
  return (
    <div id='blog'>
      <div className="preview-container">
      <div>
        {/* <h2 className="text-center text-3xl py-2">Preview</h2> */}
        <h1 className="text-center text-4xl font-bold">{blogData.title}</h1>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></div>
      </div>
    </div>

    </div>
  )
}

export default blog