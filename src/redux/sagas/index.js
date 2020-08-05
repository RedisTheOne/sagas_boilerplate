import { all } from 'redux-saga/effects'
import postsSagas from './postsSagas'

export default function* rootSaga() {
    yield all([
        postsSagas()
    ])
}