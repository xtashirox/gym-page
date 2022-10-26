import React from "react";
import "../CSS/index.css"


function Plans(props) {
    
    return(
        <div className="container-options">
            <h2>{props.tittle}</h2>
            <p className="number">{props.price} / {props.time}</p>
            <p className="text">{props.text}</p>
            <button className="boton" type="submit">GET STARTED</button>

        </div>
    );
}

export default Plans;