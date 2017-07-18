
import auth from './reducers/auth';
import common from './reducers/common';
import books from './reducers/books';

import {combineReducers} from 'redux';

export default combineReducers({
    auth,
    common,
    books
});