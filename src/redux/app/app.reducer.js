import AppActionTypes from './app.types'

const INITIAL_STATE={
    channelId: null,
    channelName: null
}

const appReducer=(state=INITIAL_STATE,action)=>{
    
    switch(action.type){
        case AppActionTypes.SET_CHANNEL_INFO:
            return {
                ...state,
                channelId: action.payload.channelId,
                channelName: action.payload.channelName
            };
       
        default :
            return state;

    }
}
export default appReducer;