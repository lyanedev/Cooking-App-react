import { NavLink } from "react-router-dom";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { CategoriesList } from "./Categories.styled";

const Categories = (props) => {
  return (
    <>
      <CategoriesList>
        <NavLink to={"/cuisine/Italien"}>
          <FaPizzaSlice />
          <h4>Italien</h4>
        </NavLink>
        <NavLink to={"/cuisine/Americain"}>
          <FaHamburger />
          <h4>Americain</h4>
        </NavLink>
        <NavLink to={"/cuisine/Thaï"}>
          <GiNoodles />
          <h4>Thaï</h4>
        </NavLink>
        <NavLink to={"/cuisine/Japonais"}>
          <GiChopsticks />
          <h4>Japonais</h4>
        </NavLink>
      </CategoriesList>
    </>
  );
};

export default Categories;
