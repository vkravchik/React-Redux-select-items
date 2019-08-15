import {createStore} from 'redux'
import rootReducer from '../reducers/car'

const store = createStore(rootReducer);

export default store;
