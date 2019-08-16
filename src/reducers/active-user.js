import {RECEIVE_GET_USER, RECEIVE_GET_USER_LIST} from "../constans/action-types";

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_GET_USER:
            return action.data;
        default:
            return state
    }
}
