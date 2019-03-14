import React from 'react';
import ReactDOM from 'react-dom';
import createStore  from './store.js';
import bandReducer from './reducers/band_reducer.js'
import BandInput from './components/band_input_component.js'
import BandIndex  from './components/band_index_component.js';

const store = createStore(bandReducer)

export const renderApp = () => {
  ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'))
}

store.subscribe(renderApp);
store.dispatch({});
