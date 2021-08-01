import { combineReducers } from 'redux';

import auth from './auth/reducer';
import categories from './categories/reducer'
import products from './products/reducer'

export default combineReducers({
    auth,
    categories,
    products
});