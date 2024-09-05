import React from 'react';
import './card.style.css';


export const Card = (props) => {
    console.log(props.monster.name);
    return (
        <div className="card-container">
            <img alt={props.monster.id} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180
`} />
           <h2>{ props.monster.name }</h2>
           <p2>{ props.monster.email }</p2>
        </div>
    )
}
    
