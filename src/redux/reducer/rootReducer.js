import {combineReducers} from 'redux'
import appReducer from './appReducer'
import curmusicReducer from'./curmusicReducer'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
  }

const curmusicConfig= {
    ...persistConfig,
    key:'curmusic',
    whitelist :['curSongId']
}

const rootReducer =combineReducers({
    app : appReducer,
    curmusic : persistReducer(curmusicConfig,curmusicReducer),
})
export default rootReducer;