import React, { FC } from "react";
import { IIngredient } from "../../../../models/IIngredient";
import styles from "./Ingredient.module.css";

interface IIngredientProps {
  ingredient: IIngredient;
}

export const Ingredient: FC<IIngredientProps> = ({ ingredient }) => {
  return (
    <li className={styles.ingredient}>
      <div className={styles.imgWrapper}>
        <img
          src={
            ingredient.image
              ? `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
              : `https://spoonacular.com/cdn/ingredients_100x100/no.jpg`
          }
          alt="Упс тут должна быть картинка"
        />
      </div>
      <p className={styles.description}>{ingredient.original}</p>
    </li>
  );
};
