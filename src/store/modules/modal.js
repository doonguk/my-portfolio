import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import *as api from 'lib/api';

//Actions type
const INITIALIZE_INPUT = 'modal/INITIALIZE_INPUT';

const SHOW_MODAL = 'modal/SHOW_MODAL';
const HIDE_MODAL = 'modal/HIDE_MODAL';

const CHANGE_INPUT = 'modal/CHANGE_INPUT';

const LOGIN = 'modal/LOGIN';
const LOGIN_CHECK = 'modal/LOGIN_CHECK';
const LOGOUT = 'modal/LOGOUT';

//Actions creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const changeInput = createAction(CHANGE_INPUT);
export const initializeInput = createAction(INITIALIZE_INPUT)
export const login = createAction(LOGIN, api.login);
export const loginCheck = createAction(LOGIN_CHECK, api.loginCheck);
export const logout = createAction(LOGOUT, api.logout);
//intialState

const initialState = Map({
    modal : {
        write : false,
        login : false,
        delete : false
    },
    password : {
        text : '',
        error : false
    },
    logged : false
})

//reducer

export default handleActions({
    [SHOW_MODAL] : (state,action) => {
        const { payload : modalName } = action;
        return state.setIn(['modal',modalName], true);
    },
    [HIDE_MODAL] : (state,action) => {
        const { payload : modalName } = action;
        return state.setIn(['modal',modalName], false);
    },
    [CHANGE_INPUT] : (state, action) => {
        const { payload : value } = action;
        return state.setIn(['password','text'], value);
    },
    [INITIALIZE_INPUT] : (state, action) => {
        return state.set('password',initialState.get('password'));
    },
    ...pender({
        type : LOGIN,
        onSuccess : (state,action) => {
            console.log(action.payload.data);
            const { success } = action.payload.data;
            return state.set('logged', success);
        },
        onError : (state) => {
            return state.setIn(['password','error'], true);
        }
    }),
    ...pender({
        type : LOGIN_CHECK,
        onSuccess : (state, action) => {
            const { logged } = action.payload.data;
            console.log('test', action.payload.data);
            return state.set('logged', logged);
        }
    })
},initialState)