import { productTypes } from './product.actions';

export const productReduces = (state: any = { recipesList: [] }, action: any) => {
    switch (action.type) {
        case productTypes.SET_RECIPE_LIST:
            localStorage.setItem('recipesList', JSON.stringify(action.payload))
            return {
                ...state,
                recipesList: action.payload
            };
        default:
            return state;
    }
};