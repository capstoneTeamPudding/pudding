import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { getRecipesByFoodItem } from "../store/recipes";

const Recipes = () => {
  //gives access to dispatch thunks directly
  const dispatch = useDispatch();
  //gives access to redux state
  const recipes = useSelector((state) => state.recipesReducer);

  //where you preform side effects, including data fetching, manually changing the DOM, using history (also available as a hook). Basically componentDidMount, componentDidUpdate and componentWillUnmount combined.
  useEffect(() => {
    dispatch(getRecipesByFoodItem());
    //this empty bracket determines that whatever is in the useEffect body will be called once, making this a replacement for componentDidMount.
  }, []);

  return (
    <View style={styles.list}>
      <Text>Recipes</Text>  
      {recipes.map((recipe) => {
        <Text key={recipe.key}>{recipe.title}</Text>
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#eee',
    width: '90%',
    paddingTop: 50,
  },
});

export default Recipes;