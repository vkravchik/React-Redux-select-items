import {ACTIVE_CAR} from '../constans/action-types'

export const selectCar = (payload) => {
    return {
        type: ACTIVE_CAR,
        payload
    }
};
