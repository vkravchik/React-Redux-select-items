import {all, fork, call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {REQUEST_GET_USER, REQUEST_GET_USER_LIST} from '../constans/action-types';
import {getUser, getUserList} from "../services/user-service";
import {receiveGetUser, receiveGetUserList} from "../actions/user-actions";


function* workerGetUser(action) {
    try {
        const data = yield call(getUser);
        yield put(receiveGetUser(data));
    } catch (e) {
        console.log(e);
    }
}

function* workerGetUserList(action) {
    try {
        const data = yield call(getUserList);
        yield put(receiveGetUserList(data));
    } catch (e) {
        console.log(e);
    }
}

export function* watcherGetUser() {
    yield takeLatest(REQUEST_GET_USER, workerGetUser)
}

export function* watcherGetUserList() {
    yield takeLatest(REQUEST_GET_USER_LIST, workerGetUserList)
}
