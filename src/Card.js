import React from 'react'
import './Card.css';

function Card(props){
    return (
        <div className="card">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.content}
            </p>
            <button type="button">delete</button>
        </div>
    );
}

export default Card;