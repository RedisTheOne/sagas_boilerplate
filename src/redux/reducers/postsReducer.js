import PostsModel from '../models/PostsReducerModel'

export const actionTypes = {
    FETCH_LOADING: 'FETCH_LOADING',
    FETCH_SUCCESSFULLY: 'FETCH_SUCCESSFULLY',
    FETCH_FAIL: 'FETCH_FAIL',
    FETCH_REQUEST: 'FETCH_REQUEST',
    ADD_POST_REQUEST: 'ADD_POST_REQUEST',
    ADD_POST_FAILED: 'ADD_POST_FAILED',
    ADD_POST_SUCCESSFULLY: 'ADD_POST_SUCCESSFULLY'
}

export const actions = {
    fetchPostsRequest: () => {
        return {
            type: actionTypes.FETCH_REQUEST,
        }
    },
    addPostRequest: (post) => {
        return {
            type: actionTypes.ADD_POST_REQUEST,
            payload: post
        }
    }
};

export default function(state = PostsModel, action) {
    switch(action.type) {
        case actionTypes.FETCH_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_SUCCESSFULLY:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
        case actionTypes.FETCH_FAIL:
            return {
                ...state,
                error: true
            }
        case actionTypes.ADD_POST_SUCCESSFULLY:
            state.items.push(action.payload)
            return state
        default:
            return state
    }
}