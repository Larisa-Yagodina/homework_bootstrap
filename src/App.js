import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Categories from "./Categories";
import Search from "./Search";


function App() {

    const categories = ['Mercedes', 'BMV', 'Ford'];

    const cars = [
        {id: 1, name: 'BMV', model: 'X7', colour: 'red', description: '180 Hp', price: 25000},
        {id: 2, name: 'Mercedes', model: 'e200', colour: 'blue', description: '184 Hp', price: 15000},
        {id: 3, name: 'Ford', model: 'Mustang', colour: 'white', description: '200 Hp', price: 22000},
        {id: 4, name: 'Mercedes', model: 'GLS', colour: 'red', description: '200 Hp', price: 21000},
        {id: 5, name: 'Mercedes', model: 'CLA', colour: 'blue', description: '200 Hp', price: 18000},
        {id: 6, name: 'BMV', model: 'X5', colour: 'black', description: '200 Hp', price: 30000},
        {id: 7, name: 'BMV', model: 'X6', colour: 'silver', description: '200 Hp', price: 28000},
        {id: 3, name: 'Ford', model: 'Explorer', colour: 'navy', description: '200 Hp', price: 27000},
    ]

    return (
        <div>
            <div className="container">
                <h1> Buy a car </h1>
                <hr/>
                <Search/>
                <hr/>
                <div className="row">
                    {categories.map(el => <Categories category={el} cars={cars}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
