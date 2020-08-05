import { takeEvery, call, put } from 'redux-saga/effects'
import { actionTypes } from '../reducers/postsReducer'

async function getRequest(url) {
    const data = await fetch(url)
    return data.json()
}

async function addPostRequest(post) {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    return data.json()
}

function* fetchPosts() {
    yield put({type: actionTypes.FETCH_LOADING})
    try {
        const items = yield call(getRequest, "https://jsonplaceholder.typicode.com/posts")
        yield put({ type: actionTypes.FETCH_SUCCESSFULLY, payload: items })
    } catch(err) {
        yield put({ type: actionTypes.FETCH_FAIL })
    }
}

function* addPost(data) {
    try {
        const response = yield call(addPostRequest, data)
        yield put({ type: 'ADD_POST_SUCCESSFULLY', payload: response.payload })
    } catch(e) {
        yield put(actionTypes.ADD_POST_FAILED)
    }
}

export default function* watchSagas() {
    yield takeEvery(actionTypes.FETCH_REQUEST, fetchPosts)
    yield takeEvery(actionTypes.ADD_POST_REQUEST, addPost)
}