import {applyMiddleware,createStore} from 'redux'
// import {routerMiddleware} from 'connected-react-router'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import history from '../history' 


import reducers from '../reducers/reducers'
import {persistState,loadStateFromStorage} from './persistor'



const store = createStore(
        reducers,
        loadStateFromStorage(),
        composeWithDevTools(
            applyMiddleware(
                thunk
                )
        )
    )

store.subscribe(()=>{persistState(store.getState(),true)})

export {
    store,
    history
}


