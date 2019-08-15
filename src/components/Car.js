import React from "react";
import CarList from "../containers/car-list";
import CarDetails from "../containers/car-details";

const Car = () => {
    return (
        <div>
            <h3>Cars:</h3>
            < CarList/>
            < hr/>
            < h4> Details: </h4>
            <CarDetails/>
        </div>
    )
};

export default Car;
