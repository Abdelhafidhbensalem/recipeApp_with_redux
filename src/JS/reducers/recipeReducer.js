import { GET_RECIPES_FAIL, GET_RECIPES_SUCCESS, RECIPES_LOAD } from "../constants/recipeActionTypes"

const initialState = {
    recipes: [],
    isLoading: false,
    errors: null,
    oneRecipe:null
}

export const recipeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case RECIPES_LOAD:
            return { ...state, isLoading: true }
        case GET_RECIPES_SUCCESS:
            return { ...state, recipes: payload, isLoading: false }
        case GET_RECIPES_FAIL:
            return { ...state, errors: payload, isLoading: false }
        default:
            return state
    }
}