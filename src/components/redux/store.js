import { createStore } from 'redux';
import reducers from './reducers';
import state from './state';


export default createStore(reducers, state);


// The store is our global application state. 