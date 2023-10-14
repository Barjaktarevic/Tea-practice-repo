import { useState } from "react";
import { IRecipeAdd } from "../data/IRecipe";
import { http } from "../data/http";

interface IProps {
  toggleRefetch: () => void;
}

const timeOptions = [
  {
    value: "",
    displayName: "Time needed",
  },
  {
    value: "5",
    displayName: "5 minutes",
  },
  {
    value: "15",
    displayName: "15 minutes",
  },
  {
    value: "30",
    displayName: "30 minutes",
  },
  {
    value: "60",
    displayName: "60 minutes",
  },
];

export default function RecipeForm(props: IProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setDescription(event.target.value);
  }
  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value);
  }

  function handleTimeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setTime(event.target.value);
  }
  function handleTagsChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTags(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const recipeAdd: IRecipeAdd = {
        description: description,
        imageUrl: image,
        duration: +time,
        name: name,
        tags: tags.split(","),
      };
      await http.post("/recipes", recipeAdd);

      setName("");
      setDescription("");
      setImage("");
      setTags("");
      setTime("");
      props.toggleRefetch();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-2xl text-stone-200 flex-1">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <p className="text-4xl">Add a recipe</p>
        <hr className="my-3" />

        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg">
            Dish
          </label>
          <input
            className="text-slate-700"
            value={name}
            onChange={handleNameChange}
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg">
            Description
          </label>
          <textarea
            className="text-slate-700"
            value={description}
            onChange={handleDescriptionChange}
            id="description"
            name="description"
            placeholder="Enter description"
          />
        </div>

        {/* input group image */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg">
            Image
          </label>
          <input
            className="text-slate-700"
            value={image}
            onChange={handleImageChange}
            type="url"
            id="image"
            name="image"
            placeholder="Enter image url"
          />
        </div>

        {/* input group time */}
        <div className="flex flex-col">
          <label htmlFor="time" className="text-lg">
            Time needed
          </label>
          <select
            className="text-slate-700"
            name="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
          >
            {timeOptions.map((el) => (
              <option value={el.value}>{el.displayName}</option>
            ))}
          </select>
        </div>
        {/* input group tags */}
        <div className="flex flex-col">
          <label htmlFor="tags" className="text-lg">
            Tags
          </label>
          <input
            className="text-slate-700"
            value={tags}
            onChange={handleTagsChange}
            type="text"
            id="tags"
            name="tags"
            placeholder="Enter a comma separated list of tags"
          />
        </div>
        {/* submit button */}
        <button className="text-xl font-semibold hover:opacity-75 border-2 border-lime-700 p-3">
          Submit
        </button>
      </form>
    </div>
  );
}
