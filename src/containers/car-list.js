import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCar} from '../actions/index';

class CarList extends React.Component {
    showList() {
        return this.props.cars.map((car) => {
            return (
                <li onClick={() => {this.props.selectCar(car)}} key={car.id}>{car.name + ' ' + car.model}</li>
            );
        })
    }

    render() {
        return (
            <ol>
                {this.showList()}
            </ol>
        );
    };
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCar: selectCar
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CarList);
