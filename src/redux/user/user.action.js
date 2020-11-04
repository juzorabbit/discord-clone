import  UserActionTypes  from './user.types'

export const login=(authUser)=>({
    type: UserActionTypes.LOGIN,
    payload: authUser
});

export const logout=()=>({
    type: UserActionTypes.LOGOUT,
});