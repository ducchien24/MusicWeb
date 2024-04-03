
import {actionTypes} from '../actions/actionTypes'
const initState ={
   curSongId:null,
}

const curmusicReducer = (state = initState, action)=>{
    switch (action.type) {
    case actionTypes.SET_CUR_MUSIC:
        return {
            ...state,
            curSongId :action.sid || null
        }

        default:
            return state;
    }
}
export default curmusicReducer