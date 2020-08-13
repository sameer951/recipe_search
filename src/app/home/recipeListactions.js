
import actions from "../actions";
export default {
    setRecipeList: (recipeList) => {
        return (dispatch) => {
            dispatch({ type: actions.SET_RECIPE_LIST, payload: recipeList });
        };
    },
    setRecipeDetails: (recipeDetails) => {
        return (dispatch) => {
            dispatch({ type: actions.SET_RECIPE_DETAILS, payload: recipeDetails });
        };
    },
    setSearchInput: (input) => {
        return (dispatch) => {
            dispatch({ type: actions.SET_SEACRCH_INPUT, payload: input });
        };
    },
}
