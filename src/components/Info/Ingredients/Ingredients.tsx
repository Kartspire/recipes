import { FC } from 'react';
import { IIngredient } from '../../../models/IIngredient';
import { Ingredient } from './Ingredient/Ingredient';
import styles from './Ingredients.module.css';

interface IIngredientsProps {
  ingredients: IIngredient[];
}

export const Ingredients: FC<IIngredientsProps> = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <ul className={styles.ingredientsList}>
      {ingredients.map((el, index) => (
        <Ingredient key={el.id} ingredient={el}></Ingredient>
      ))}
    </ul>
  );
};
