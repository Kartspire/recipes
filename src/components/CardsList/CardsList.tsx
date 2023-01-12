import { IRecipe } from "../../models/IRecipe";
import { Card } from "./Card/Card";
import styles from "./Cardslist.module.css";

interface ICardsListProps {
  recipes: IRecipe[];
}

export function CardsList({ recipes }: ICardsListProps) {
  const cards = recipes.map((el) => (
    <Card
      key={el.id}
      id={el.id}
      image={el.image}
      name={el.name}
      content={el.content}
    />
  ));
  return <ul className={styles.cardsList}>{cards}</ul>;
}
