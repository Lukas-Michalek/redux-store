import { createStore, combineReducers } from 'redux';

import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { cartReducer } from '../features/cart/cartSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice'

const reducers = {
    currencyFilter: currencyFilterReducer,
    inventory: inventoryReducer,
    cart: cartReducer,
    searchTerm: searchTermReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);

