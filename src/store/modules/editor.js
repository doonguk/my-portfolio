import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import *as api from 'lib/api';

//action type
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';

const GET_POST = 'editor/GET_POST';
const EDIT_POST = 'editor/EDIT_POST';
//action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);

export const getPost = createAction(GET_POST,api.getPost)
export const editPost = createAction(EDIT_POST,api.editPost);
//initialState
const initialState = Map({
    title : '',
    markdown : '',
    tags : '',
    category : '',
    postId : null,
});

//reducer
export default handleActions({
    [INITIALIZE] : (state,action) => initialState,
    [CHANGE_INPUT] : (state,action) => {
        const { name , value } = action.payload;
        return state.set(name, value);
    },
    ...pender({
        type : WRITE_POST,
        onSuccess : (state,action) => {
            const { _id } = action.payload.data;
            // cosnt { data : _id } = action.payload 하면 data에 _id로 레퍼런스를 준거임
            return state.set('postId', _id);
        }
    }),
    ...pender({
        type : GET_POST,
        onSuccess : (state,action) => {
            const { title, body, category, tags } = action.payload.data;
            console.log(action.payload.data);
            return state.set('title', title)
                        .set('markdown', body)
                        .set('category', category)
                        .set('tags', tags.join(', '));
        }
    }),
}, initialState);