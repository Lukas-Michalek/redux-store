import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm'

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>

      <SearchTerm 
        dispatch={dispatch}
        searchTerm={state.searchTerm}

      />

      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={getFilteredItems(state.inventory,state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      < Cart 
        cart={state.cart}
        dispatch={dispatch}
        currencyFilter={state.currencyFilter}

      />


    </div>
  );
};


function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default App;