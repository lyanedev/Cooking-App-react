import useAxios from "../../hooks/useAxios";

const Popular = (props) => {
  const url = `https://api.spoonacular.com/recipes/random?number=9&apiKey=${"a8bf54ab8d2d4289bc9eb584bbed625e"}`;

  const { data, isLoading, isError } = useAxios(url);

  return (
    <>
      <h1>Popular</h1>
      {data.recipes?.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.title}</p>
        </div>
      ))}
    </>
  );
};

export default Popular;
