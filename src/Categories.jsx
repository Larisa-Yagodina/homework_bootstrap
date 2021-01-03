import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Cards";


function Category(props) {


    return (
        <div className="col-sm">
            <h3>{props.category}</h3>
            {props.cars.filter(el => el.name === props.category).map(el => <Card car={el}/>)}
        </div>
    );
}

export default Category;
