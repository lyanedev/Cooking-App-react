import useAxios from "../../hooks/useAxios";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Popular = (props) => {
  const url = `https://api.spoonacular.com/recipes/random?number=9&apiKey=${"a8bf54ab8d2d4289bc9eb584bbed625e"}`;

  const { data: popular, setData, isLoading, isError } = useAxios(url);

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
          {popular?.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <PopularCard>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </PopularCard>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const PopularCard = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
  }
`;

export default Popular;
