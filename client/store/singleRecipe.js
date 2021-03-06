import axios from "axios";
const spnAPI = 'https://api.spoonacular.com/recipes/'

//Action Types
const GET_RECIPE = "GET_RECIPE";
const SAVE_RECIPE = "SAVE_RECIPE";

//Action Creators
export const getSingleRecipe = (recipe) => ({
  type: GET_RECIPE,
  recipe,
});
export const saveRecipe = (recipe) => ({
  type: SAVE_RECIPE,
  recipe,
});

//Thunks
export const saveRecipeThunk = (userUid, recipeObj, image) => {
  //let userUid = 1;
  let recipeName = recipeObj.title;
  let recipeId = recipeObj.id;
  console.log("recipe from thunk", recipeName, recipeId, image);
  return async (dispatch) => {
    try {
      const { data: recipe } = await axios.post(
        //`https://fuzzy-cow-61.loca.lt/api/recipes/${userUid}`,
        `https://the-thymely-cook.herokuapp.com/api/recipes/${userUid}`,
        {
          recipeName,
          recipeId,
          image,
        }
      );
      dispatch(saveRecipe(recipeObj));
    } catch (err) {
      console.log("saveRecipe THUNK ERROR");
    }
  };
};

const initialState = {
  recipe: {},
  savedRecipes: [],
};

//Reducer
export default function recipeReducer(state = [], action) {
  switch (action.type) {
    case SAVE_RECIPE:
      return [...state, action.recipe];
    default:
      return state;
  }
}
