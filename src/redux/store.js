import {createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import rootReducer from './reducer/rootReducer'
import { persistStore } from 'redux-persist'



const reduxConfig = ()=>{
     const store = createStore(rootReducer, applyMiddleware(thunk));
     let persistor = persistStore(store)
     return { store, persistor }
}
export default reduxConfig