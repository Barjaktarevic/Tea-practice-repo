import { IRecipe } from "../data/IRecipe";
import { AiOutlineDelete } from "react-icons/ai";

interface IProps {
  recipe: IRecipe;
  handleDelete: (id: string) => Promise<void>;
}

export default function RecipeCard(props: IProps) {
  return (
    <div className="relative mx-auto max-w-xs rounded-md bg-white p-6 shadow-md min-h-[370px]">
      <title>{props.recipe.name}</title>

      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {props.recipe.name}
        </h1>
        <img
          src={props.recipe.imageUrl}
          alt={props.recipe.name}
          className="mt-4 rounded-md shadow-md"
        />
        <p className="mt-4 text-gray-600">
          Duration: {props.recipe.duration} minutes
        </p>
        <p className="mt-2 text-gray-600">
          Tags:{" "}
          {props.recipe.tags.map((el) => (
            <span>{el},</span>
          ))}
        </p>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Description:
        </h2>
        <p className="mt-2 text-gray-700">{props.recipe.description}</p>
      </div>
      <AiOutlineDelete
        onClick={() => props.handleDelete(props.recipe.id)}
        className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
      />
    </div>
  );
}
