import { Popular, Veggie, Categories } from "../../components";

import React from "react";

const Home = (props) => {
  return (
    <>
      <Categories />
      <Popular />
      <Veggie />
    </>
  );
};

export default Home;
