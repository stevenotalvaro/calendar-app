import {combineReducers, compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from '../reducers/authReducer'
import {calendarReducer} from '../reducers/calendarReducer'
import {uiReducer} from '../reducers/uiReducer'

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

const reducers = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
)
