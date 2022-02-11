import axios from 'axios'

const spnAPI = 'https://api.spoonacular.com/recipes/'
//import {SPOON_API_KEY} from "../.keys.js"
import {SPOON_API_KEY} from '@env';


//ACTIONS
const GET_RECIPE = 'GET_RECIPE'
const SAVE_RECIPE = 'SAVE_RECIPE'

//ACTION CREATORS
export const getSingleRecipe = (recipe) => ({
  type: GET_RECIPE,
  recipe,
});
export const saveRecipe = (recipe) => ({
  type: SAVE_RECIPE,
  recipe,
});


//THUNK

export const saveRecipeThunk = (recipe_name) => {
  let userId = 1;
  console.log("recipe from thunk", recipe_name)
  return async (dispatch) => {
    try {
      const { data: recipe } = await axios.post(
        `https://silly-goat-63.loca.lt/api/recipes/${userId}`,
        recipe_name
      );
      dispatch(saveRecipe(recipe));
    } catch (err) {
      console.log("saveRecipe THUNK ERROR");
    }
  };
};

const initialState = {
  recipe: {},
  savedRecipes: [],
};

//REDUCER

export default function recipeReducer(state = initialState, action) {
    console.log("I'm recipeReducer, I got ", action.recipe)
  switch (action.type) {
    case SAVE_RECIPE:
      return {...state, savedRecipes: [...state, action.recipe]}     
    default:
      return state;
  }
}