import { useState, useEffect } from "react";

import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const getData = async () => {
    setIsLoading(true);
    const check = localStorage.getItem("popular");

    if (check) {
      setData(JSON.parse(check));
    } else {
      try {
        const { data } = await axios.get(url);

        if (!data) {
          throw new Error(data.statusText);
        }

        localStorage.setItem("popular", JSON.stringify(data));
        setData(data);

        setIsError(null);
      } catch (err) {
        setIsError(`Oops, il y a eu un problème 😭 : ${err}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, setData, isLoading, isError };
};

export default useAxios;
