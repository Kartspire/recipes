import axios from "axios";
import "../../styles/main.global.css";
import React, { useMemo } from "react";
import { CardsList } from "../CardsList";
import { WithLoader } from "../WithLoader";
import { Dropdown } from "../Dropdown";
import { Search } from "../Search";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setRecipes } from "../../app/reducers/recipesSlice";
import { isLoaded } from "../../app/reducers/controlsSlice";
import { setSearchQuery } from "../../app/reducers/searchSlice";

export function Main() {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const searchQuery = useAppSelector((state) => state.search.searchQuery);
  // interface IRecipeArr {
  //   id: number;
  //   name: string;
  //   image: string;
  //   imageType: string;
  //   content: string;
  // }
  // type RecipesArrType = Array<IRecipeArr>;

  // const [loading, setLoading] = useState(false);
  // const [recipesArr, setRecipesArr] = useState<RecipesArrType>([]);
  // const [searchQuery, setSearchQuery] = useState('');

  const dropdownRecipesHandler = (recipeType: string) => {
    dispatch(isLoaded());
    const getRecipes = async () => {
      const recipes = await axios({
        method: "get",
        url: `https://api.spoonacular.com/food/search?query=${recipeType}&number=15&apiKey=9c3b5bc6a42a4f14949445caa1b31477`,
      });
      console.log(recipes);
      dispatch(setRecipes(recipes.data.searchResults[0].results));
      dispatch(isLoaded());
    };
    getRecipes();
  };

  const searchedRecipes = useMemo(() => {
    if (recipes.length !== 0) {
      return recipes.filter((el) =>
        el.name.toLowerCase().includes(searchQuery)
      );
    }
    return recipes;
  }, [searchQuery, recipes]);

  return (
    <div className="container">
      <Search
        placeholder="Поиск"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setSearchQuery(event.target.value));
          console.log(searchQuery);
        }}
      />
      <WithLoader>
        <Dropdown
          menu={["pizza", "apple", "burger"]}
          defaultValue="Выбрать категорию"
          onClick={dropdownRecipesHandler}
        ></Dropdown>
      </WithLoader>

      <CardsList recipes={searchedRecipes}></CardsList>
    </div>
  );
}
