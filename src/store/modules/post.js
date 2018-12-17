import { createAction, handleActions } from 'redux-actions';
import { List, Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import *as api from 'lib/api';

//Action type
const GET_LIST = 'post/GET_LIST';
const GET_SEARCH_LIST = 'post/GET_SEARCH_LIST';
const GET_POST = 'post/GET_POST';
const SET_POST_ID = 'post/SET_POST_ID';
const DELETE_POST = 'post/DELETE_POST';
const MENU_VISIBLE = 'post/MENU_VISIBLE';
const MENU_FALSE = 'post/MENU_FALSE';
const PRE_BUTTON = 'post/PRE_BUTTON';
const NEXT_BUTTON = 'post/NEXT_BUTTON';

//Action Creators
export const getList = createAction(GET_LIST,api.getList);
export const getSearchList = createAction(GET_SEARCH_LIST, api.getSearchList);
export const getPost = createAction(GET_POST,api.getPost);
export const setPostId = createAction(SET_POST_ID);
export const deletePost = createAction(DELETE_POST, api.deletePost);
export const menuVisible = createAction(MENU_VISIBLE);
export const menuFalse = createAction(MENU_FALSE);
export const togglePreButton = createAction(PRE_BUTTON);
export const toggleNextButton = createAction(NEXT_BUTTON);

//initialState
const initialState = Map({
    post : List(),
    postId : null,
    menuVisible : false,
    lastPage : 1,
    onePost : null,
    isDisable1 : false,
    isDisable2 : false
})
//reducer
export default handleActions({
    ...pender({
        type : GET_LIST,
        onSuccess : (state, action) => {
            const { data : posts } = action.payload;
            const lastPage = action.payload.headers['lastpage'];
            return state.set('post', fromJS(posts))
                        .set('lastPage', parseInt(lastPage,10));
        }
    }),
    ...pender({
        type : GET_POST,
        onSuccess : (state,action) => {
            const { data : posts } = action.payload;
            return state.set('onePost', posts);
        }
    }),
    ...pender({
        type : GET_SEARCH_LIST,
        onSuccess : (state,action) => {
            const { data : posts } = action.payload;
            return state.set('post', fromJS(posts));          
        }
    }),
    [SET_POST_ID] : (state, action) => {
        const { payload : id } = action;
        return state.set('postId', id);
    },
    [MENU_VISIBLE] : (state, action) => {
        return state.set('menuVisible', ! state.get('menuVisible'));
    },
    [MENU_FALSE] : (state, action) => {
        return state.set('menuVisible', false);
    },
    [PRE_BUTTON] : (state, action) => {
        return state.set('isDisable1', true);
    },
    [NEXT_BUTTON] : (state, action) => {
        return state.set('isDisable2', true);
    }

},initialState)