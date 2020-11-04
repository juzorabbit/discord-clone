import {combineReducers} from 'redux';
import userReducer from '../redux/user/user.reducer';
import appReducer from '../redux/app/app.reducer';


const rootReducer=combineReducers({
    user: userReducer,
    app: appReducer
});

export default rootReducer;