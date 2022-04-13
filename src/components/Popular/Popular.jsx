import useAxios from "../../hooks/useAxios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { PopularCard, Wrapper } from "./Popular.styled";

const Popular = (props) => {
  const url = `https://api.spoonacular.com/recipes/random?number=9&apiKey=${"a8bf54ab8d2d4289bc9eb584bbed625e"}`;

  const { data: popular, setData, isLoading, isError } = useAxios(url);

  const popularList = popular.map((recipe) => (
    <SplideSlide key={recipe.id}>
      <PopularCard>
        <p>{recipe.title}</p>
        <img src={recipe.image} alt={recipe.title} />
      </PopularCard>
    </SplideSlide>
  ));

  return (
    <>
      <h1>Popular</h1>

      <Wrapper>
        <h3>Popular</h3>

        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            gap: 5,
          }}
        >
          {popular && popularList}
        </Splide>
      </Wrapper>
    </>
  );
};

export default Popular;
