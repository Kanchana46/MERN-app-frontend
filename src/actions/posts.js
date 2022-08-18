import * as api from '../api';
import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    FETCH_BY_SEARCH,
    START_LOADING,
    STOP_LOADING,
    FETCH_POST,
    COMMENT
} from '../constants/actionType'

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts(page);
        const action = { type: FETCH_ALL, payload: data }
        dispatch(action)
        dispatch({ type: STOP_LOADING });
    } catch (error) {
        console.log(error)
    }
}

export const getPost = (id) => async (dispatch) => {
    try {
        //dispatch({ type: START_LOADING });
        const { data } = await api.fetchPost(id);
        const action = { type: FETCH_POST, payload: data }
        dispatch(action)
        //dispatch({ type: STOP_LOADING });
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createPost(post);
        const action = { type: CREATE, payload: data }
        dispatch(action)
        dispatch({ type: STOP_LOADING });
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        const action = { type: UPDATE, payload: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        const action = { type: DELETE, payload: id }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}


export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        const action = { type: UPDATE, payload: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        const action = { type: FETCH_BY_SEARCH, payload: data }
        dispatch(action)
        dispatch({ type: STOP_LOADING });
    } catch (error) {
        console.log(error)
    }
}

export const commentPost = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id);
        const action = { type: COMMENT, payload: data }
        dispatch(action)
        return data.comments;
    } catch (error) {
        console.log(error)
    }
}

