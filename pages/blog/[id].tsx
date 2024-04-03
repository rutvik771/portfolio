import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  addData,
  getDataById,
  getAllData,
} from "@/firebase/firestore/controller";
import Loader from "@/Components/Loader";

const blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState({
    slug: "",
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [id]);

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
  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <div id="blog">
            <div className="preview-container">
              <div>
                <h1 className="text-center text-4xl font-bold">
                  {blogData.title}
                </h1>
                <div
                  className="preview-content"
                  dangerouslySetInnerHTML={{ __html: blogData.content }}
                ></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default blog;
