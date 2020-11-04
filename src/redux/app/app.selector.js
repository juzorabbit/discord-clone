import {createSelector} from 'reselect'

const selectApp = (state) => state.app;

export const selectChannelId= createSelector(
    [selectApp],
    (app)=>app.channelId
)

export const selectChannelName= createSelector(
    [selectApp],
    (app)=>app.channelName
)

