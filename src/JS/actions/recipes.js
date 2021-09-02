import {GET_RECIPES_FAIL,GET_RECIPES_SUCCESS,RECIPES_LOAD} from "../constants/recipeActionTypes"
import axios from "axios"
export const getRecipes=(query)=>async dispatch=>{
dispatch({type:RECIPES_LOAD})
try {
    const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=4fa2acd8&app_key=f77a53a8f4c08f5ae1a4331af65089b6`);
dispatch({type:GET_RECIPES_SUCCESS,payload:response.data.hits})
} catch (error) {
    dispatch({type:GET_RECIPES_FAIL,payload:error})
}
}