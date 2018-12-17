import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';


//action type
const INITIALIZE = 'mainPhoto/INITIALIZE';
const CHANGE_PATH = 'mainPhoto/CHANGE_PATH';
const ADD_INDEX = 'mainPhoto/ADD_INDEX';

//action creators
export const changePath = createAction(CHANGE_PATH);
export const addIndex = createAction(ADD_INDEX);
export const initialize = createAction(INITIALIZE);
//initialState
const initialState = Map({
    path:'main1.jpg',
    index : 1
});

//reducer
export default handleActions({
    [CHANGE_PATH] : (state,action) => {
        const {payload : path } = action;
        return state.set('path', path);
    },
    [ADD_INDEX] : (state) => {
        return state.set('index',state.get('index')+1);
    },
    [INITIALIZE] : (state,action) => {
        return state.set('path','main1.jpg')
                    .set('index',1);
    }
}, initialState);