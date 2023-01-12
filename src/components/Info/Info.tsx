import { Link } from "react-router-dom";
import "../../styles/main.global.css";
import styles from "./Info.module.css";
import { useAppSelector } from "../../app/hooks";
import { WithLoader } from "../WithLoader";
import cookingTime from "../../assets/img/cookingTime.png";
import { Ingredients } from "./Ingredients";

export function Info() {
  const recipeInfo = useAppSelector((state) => state.recipeInfo.recipeInfo);
  const recipeImage = useAppSelector((state) => state.recipeInfo.recipeImage);

  return (
    <WithLoader>
      <div className="container">
        <Link to="/recipes" className={styles.back}></Link>
        <h3 className={styles.recipeTitle}>{recipeInfo?.title}</h3>
        <div className={styles.imgWrapper}>
          <img className={styles.recipeImage} src={recipeImage} alt="" />
        </div>
        <figure className={styles.cookingTimeWrapper}>
          <img className={styles.cookingTimeImg} src={cookingTime} alt="" />
          <figcaption>ready in {recipeInfo?.readyInMinutes} minutes</figcaption>
        </figure>
        <p
          className={styles.recipeDescription}
          dangerouslySetInnerHTML={{ __html: recipeInfo?.summary! }}
        ></p>
        <h3 className={styles.sectionHeader}>Ingredients</h3>
        <Ingredients
          ingredients={recipeInfo?.extendedIngredients!}
        ></Ingredients>
      </div>
    </WithLoader>
  );
}
