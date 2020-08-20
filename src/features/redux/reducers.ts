import { productReduces } from './product/product.reducer';

import { createStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    recipes: productReduces,
});

export const storeFile = (initialState = {}): any => {
    return createStore(rootReducer, initialState);
}