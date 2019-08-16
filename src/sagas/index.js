import {all, fork} from 'redux-saga/effects'

import {watcherGetUser, watcherGetUserList} from "./user-saga";

export default function* rootSaga() {
    yield all([
        fork(watcherGetUser),
        fork(watcherGetUserList),
    ])
}
