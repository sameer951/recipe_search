export const productTypes = {
    'SET_RECIPE_LIST': 'SET_RECIPE_LIST',
    'SET_RECIPE_SELECTED': 'SET_RECIPE_SELECTED',
    'SET_SEARCHED_REC':'SET_SEARCHED_REC'
}

export const productActions = dispatch => {
    return {
        // dispatching plain actions
        setRecipesList: (item) => dispatch({ type: productTypes.SET_RECIPE_LIST, payload: item }),
    }
}