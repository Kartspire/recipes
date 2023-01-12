import { IIngredient } from "./IIngredient";

export interface IInfo {
  title: string;
  image: string;
  instructions: string;
  summary: string;
  readyInMinutes: number;
  extendedIngredients: IIngredient[];
}
