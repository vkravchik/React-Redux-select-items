import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';

const rootReducers = combineReducers({
    cars: CarsReducers,
    activeCar: ActiveCar
});

export default rootReducers;
