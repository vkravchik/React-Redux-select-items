import {ACTIVE_CAR} from '../constans/action-types'

export default function (state = null, action) {
    switch (action.type) {
        case ACTIVE_CAR:
            return action.payload;
        default:
            return state
    }
}
