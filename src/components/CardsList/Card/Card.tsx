import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { IRecipe } from "../../../models/IRecipe";
import { Button } from "../../Button";
import { useDispatch } from "react-redux";
import { isLoaded } from "../../../app/reducers/controlsSlice";
import axios from "axios";
import {
  setRecipeImage,
  setRecipeInfo,
} from "../../../app/reducers/recipeInfoSlice";

export const Card = ({ id, image, name }: IRecipe) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showMoreInfo = async () => {
    navigate(`/info/${id}`);
    dispatch(isLoaded());
    const info = await axios({
      method: "get",
      url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=9c3b5bc6a42a4f14949445caa1b31477`,
    });
    console.log(info.data);
    dispatch(setRecipeInfo(info.data));
    dispatch(setRecipeImage(image));
    dispatch(isLoaded());
  };

  return (
    <div className={styles.cardWrapper}>
      <li className={styles.card}>
        <img src={image} alt="" className={styles.image} />
        <h3>{name}</h3>
        <Button classes={["info"]} onClick={showMoreInfo}></Button>
      </li>
    </div>
  );
};
