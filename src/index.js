// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './app/App';
// import { store } from './app/store'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App
//           state={store.getState()}
//           dispatch={store.dispatch}
    
//     />

    

//   </React.StrictMode>

// );

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { store } from './app/store'
// Import the store here.

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App
          state={store.getState()}
          dispatch={store.dispatch} 
      
    />,
    document.getElementById('root')
  )
};
render();

// Subscribe render to the store.
store.subscribe(render)
