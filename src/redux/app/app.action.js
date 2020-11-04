import  AppActionTypes  from './app.types'

export const setChannelInfo=(info)=>({
    type: AppActionTypes.SET_CHANNEL_INFO,
    payload: info
});