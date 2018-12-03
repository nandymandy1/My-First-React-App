import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Reducer
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Invoke Reducer
import rootReducer from './reducers/rootReducer';


// Initializing Redux Store
const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
