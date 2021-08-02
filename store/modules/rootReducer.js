import { combineReducers } from 'redux';

import auth from './auth/reducer';
import categories from './categories/reducer'
import products from './products/reducer'
import productList from './toAddList/reducer'

export default combineReducers({
    auth,
    categories,
    products,
    productList
});