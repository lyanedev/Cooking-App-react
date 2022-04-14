import useAxios from "../../hooks/useAxios";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {
  CardsContainer,
  PopularCard,
  PopularTitle,
  Wrapper,
} from "./Popular.styled";

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
      <Wrapper>
        <PopularTitle>Popular</PopularTitle>

        <CardsContainer>
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              perPage: 4,
              pagination: false,
              pauseOnHover: false,
              resetProgress: false,
              //drag: "free",
              gap: 20,
              autoplay: true,
            }}
          >
            <SplideTrack>{popular && popularList}</SplideTrack>
          </Splide>
        </CardsContainer>
      </Wrapper>
    </>
  );
};

export default Popular;
