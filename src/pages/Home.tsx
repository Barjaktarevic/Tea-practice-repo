import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { IRecipe, IRecipeGetResponse } from "../data/IRecipe";
import { http } from "../data/http";
import RecipeForm from "../components/RecipeForm";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [toggleRefetch, setToggleRefetch] = useState<boolean>(false);

  async function getRecipes() {
    try {
      const response = await http.get<IRecipeGetResponse>("/recipes");
      setRecipes(response.data.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id: string) {
    try {
      await http.delete(`/recipes/${id}`);
      await getRecipes();
      toast.success("Recipe successfully deleted");
    } catch (error) {
      toast.error(
        "Oooops! A problem occurred while attempting to delete a recipe"
      );
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
    <div className="mt-20 p-8 flex gap-14 items-baseline">
      <RecipeForm toggleRefetch={handleRefetch} />
      <div className="flex flex-wrap gap-1 justify-center flex-1">
        {recipes?.map((el) => (
          <RecipeCard handleDelete={handleDelete} recipe={el} />
        ))}
      </div>
    </div>
  );
}
