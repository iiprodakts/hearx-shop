import {applyMiddleware,createStore} from 'redux'
// import {routerMiddleware} from 'connected-react-router'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import history from '../history' 

// import {routerMiddleware} from '../middlwares/reduxroute'
// import apiMiddleware from '../middlwares/api'
import reducers from '../reducers/reducers'
// import startListener from '../utilities/listener'
// import {push} from '../middlwares/withcustommiddlewares'


// const catchHistoryActionCreators = routerMiddleware(history)

const store = createStore(
        reducers,
        composeWithDevTools(
            applyMiddleware(
                thunk
                )
        )
    )

// startListener(history,store)
export {
    store,
    history
}


