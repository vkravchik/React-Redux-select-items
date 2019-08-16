import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';

import user from './user-reducer'

const rootReducers = combineReducers({
    cars: CarsReducers,
    activeCar: ActiveCar,
    user: user,
});

export default rootReducers;
