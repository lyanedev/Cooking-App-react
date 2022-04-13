import { NavLink } from "react-router-dom";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { CategoriesList } from "./Categories.styled";

const Categories = (props) => {
  return (
    <>
      <CategoriesList>
        <NavLink to={"/cuisine/italien"}>
          <FaPizzaSlice />
          <h4>Italien</h4>
        </NavLink>
        <NavLink to={"/cuisine/americain"}>
          <FaHamburger />
          <h4>Americain</h4>
        </NavLink>
        <NavLink to={"/cuisine/thaï"}>
          <GiNoodles />
          <h4>Thaï</h4>
        </NavLink>
        <NavLink to={"/cuisine/japonais"}>
          <GiChopsticks />
          <h4>Japonais</h4>
        </NavLink>
      </CategoriesList>
    </>
  );
};

export default Categories;
