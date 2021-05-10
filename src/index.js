
import React from 'react';
import ReactDOM from 'react-dom';
 
import { createStore } from './store';
 
console.log(store);

import BandInput from './components/band_input_component';
import bandReducer from './reducers/band_reducer.js';
 
const store = createStore(bandReducer);

ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'))

const renderApp = () => {
  ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'))
}

store.subscribe(renderApp);
store.dispatch({})