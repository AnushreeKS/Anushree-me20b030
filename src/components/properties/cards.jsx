
import React from 'react';
import './cards.css';

function card(props)
{
    return(
        
        <div className= "cs0" style= {{width: 1700}}>
            <div className="cs1">
                {props.name}
            </div>
            <br></br>
            <br></br>
            <img className="image" src={props.src} class="card-img-top" alt="Wooden chair"></img>
            <br></br>
            <div className="cs2">
                {props.description}
            </div>
            <div className="button">
                 <button type="button" class="btn btn-danger">Customize</button>
            </div>
        </div>
        
    );
}

export default card;