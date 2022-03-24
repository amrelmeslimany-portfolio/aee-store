import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url, data) => {
  const [response, setResponse] = useState({
    isLoading: true,
    isError: false,
    errorMessage: "",
    data,
  });
  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        if (result.data.length) {
          setResponse((current) => ({
            ...current,
            isLoading: false,
            data: result.data,
          }));
        } else {
          setResponse((current) => ({
            ...current,
            isLoading: false,
            isError: true,
            errorMessage: "Empty Data",
          }));
        }
      })
      .catch((error) => {
        setResponse((current) => ({
          ...current,
          isLoading: false,
          isError: true,
          errorMessage: error.message,
        }));
      });
  }, [url]);

  return response;
};
