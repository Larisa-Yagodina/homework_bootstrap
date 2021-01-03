import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Card(props) {

    const car = props.car;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{car.name} {car.model}</h5>
                <p className="card-text">Color: {car.colour}, Horsepower: {car.description} <br/> Price: {car.price}</p>
                <button type="button" className="btn btn-outline-dark"> Buy</button>
            </div>
        </div>
    );
}

export default Card;
