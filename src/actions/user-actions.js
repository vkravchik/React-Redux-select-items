import {
    RECEIVE_GET_USER,
    RECEIVE_GET_USER_LIST,
    REQUEST_GET_USER,
    REQUEST_GET_USER_LIST
} from "../constans/action-types";

export const requestGetUser = (user) => ({type: REQUEST_GET_USER, user: user});
export const receiveGetUser = (data) => ({type: RECEIVE_GET_USER, data});

export const requestGetUserList = () => ({type: REQUEST_GET_USER_LIST});
export const receiveGetUserList = (data) => ({type: RECEIVE_GET_USER_LIST, data});
