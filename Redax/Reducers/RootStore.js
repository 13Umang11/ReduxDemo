import {createStore} from 'redux';
import {rootReducer} from './index';
// import {MainReducer} from './MainReducer';

export const store = createStore(rootReducer);
