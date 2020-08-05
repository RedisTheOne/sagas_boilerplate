import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const initialState = {}

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
sagaMiddleware.run(rootSaga)

export const action = type => {
    store.dispatch({type}) 
}
