import axios from "axios";
import { useState, useEffect } from "react";

function usePostData(url, PostData) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post(url, PostData);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  }, [url, PostData]);

  return [data];
}

export default usePostData;
