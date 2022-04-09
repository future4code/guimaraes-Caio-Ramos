import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  }, [url]);
  return { data, setData, isLoading };
};

export default useRequestData;
