import { createStore, combineReducers } from 'redux';

import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { cartReducer } from '../features/cart/cartSlice';

const reducers = {
    currencyFilter: currencyFilterReducer,
    inventory: inventoryReducer,
    cart: cartReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);

