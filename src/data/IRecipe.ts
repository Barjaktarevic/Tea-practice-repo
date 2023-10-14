export interface IRecipe {
  id: string;
  description: string;
  duration: number;
  imageUrl: string;
  name: string;
  tags: string[];
}

export interface IRecipeGetResponse {
  totalCount: number;
  availableTags: string[];
  availableDurations: number[];
  recipes: IRecipe[];
}
export type IRecipeAdd = Omit<IRecipe, "id">;
