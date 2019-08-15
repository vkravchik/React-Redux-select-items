import React from 'react';
import {connect} from 'react-redux';

class CarDetails extends React.Component{
    render() {
        if(!this.props.car) {
            return (
                <p>Choose your car..</p>
            );
        }
        return (
            <div>
                <h4>{this.props.car.name}</h4>
                <img src={this.props.car.img}/><br/>
                <p>{this.props.car.description}</p>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        car: state.activeCar
    }
}

export default connect (mapStateToProps)(CarDetails)
