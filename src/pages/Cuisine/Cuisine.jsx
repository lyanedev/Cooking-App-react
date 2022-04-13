import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${"a8bf54ab8d2d4289bc9eb584bbed625e"}&cuisine=${name}`;

  const getCuisine = async (name) => {
    try {
      const { data } = await axios(url);
      setCuisine(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //getCuisine("italien");
    console.log(params);
  }, []);

  console.log(cuisine);

  return <></>;
};

export default Cuisine;
