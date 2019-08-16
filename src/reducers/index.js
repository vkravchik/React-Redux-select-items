import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';

import user from './user-reducer'
import activeUser from './active-user'

const rootReducers = combineReducers({
    cars: CarsReducers,
    activeCar: ActiveCar,
    activeUser: activeUser,
    user: user,
});

export default rootReducers;
