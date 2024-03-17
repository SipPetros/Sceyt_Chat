import { createStore } from 'redux';
import rootReducer from './messages/reducers';

const store = createStore(rootReducer);

export default store;
