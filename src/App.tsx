import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import RecipeForm from "./components/RecipeForm";
import { IRecipe, IRecipeGetResponse } from "./data/IRecipe";
import { http } from "./data/http";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [toggleRefetch, setToggleRefetch] = useState<boolean>(false);

  async function getRecipes() {
    try {
      const response = await http.get<IRecipeGetResponse>("/recipes");
      console.log(response);
      setRecipes(response.data.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id: string) {
    try {
      await http.delete(`/recipes/${id}`);
      await getRecipes();
    } catch (error) {
      console.log(error);
    }
  }

  function handleRefetch() {
    setToggleRefetch(!toggleRefetch);
  }

  useEffect(() => {
    getRecipes();
  }, [toggleRefetch]);

  return (
    <div className="bg-slate-800 h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="mt-20 p-8 flex gap-14 items-baseline">
        <RecipeForm toggleRefetch={handleRefetch} />
        <div className="flex flex-wrap gap-1 justify-center flex-1">
          {recipes?.map((el) => (
            <RecipeCard handleDelete={handleDelete} recipe={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
