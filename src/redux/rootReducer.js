import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import employeeReducer from './employee/employeeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    employee: employeeReducer

})

export default rootReducer;