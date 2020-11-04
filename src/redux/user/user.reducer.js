import UserActionTypes from './user.types'

const INITIAL_STATE={
    user: null
}

const userReducer=(state=INITIAL_STATE,action)=>{
    
    switch(action.type){
        case UserActionTypes.LOGIN:
            return {
                ...state,
                user : action.payload,
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                user : null
            };
        default :
            return state;

    }
}
export default userReducer;