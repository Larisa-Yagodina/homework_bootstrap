import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Card(props) {


    return (
        <div>
            <input className="form-control" list="datalistOptions" id="exampleDataList"
                   placeholder="Type to search..."/>
            <datalist id="datalistOptions">
                <option value="Mercedes"/>
                <option value="BMV"/>
                <option value="Ford"/>
            </datalist>
        </div>
    );
}

export default Card;
