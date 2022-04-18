import { createStore } from 'redux';
import { data } from './data';
import rootReducer from './reducers/reducer';
let storeObjecct = createStore(rootReducer, data);

export default storeObjecct;