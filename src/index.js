import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'mobx-react-lite/batchingForReactDom'

import storeInstance from './store/Store'
export const StoreContext = React.createContext()

ReactDOM.render(
  <StoreContext.Provider value={storeInstance}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
