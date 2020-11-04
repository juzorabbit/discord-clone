import {createSelector} from 'reselect'

const selectCurrentUser=state=>state.user;

export const selectUser= createSelector(
    [selectCurrentUser],
    (user)=>user.user
)