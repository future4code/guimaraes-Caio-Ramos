import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../constants/BaseUrl";
const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  }, [url]);
  return { data, setData, isLoading };
};

export default useRequestData;
