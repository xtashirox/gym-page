import React from "react";
import Menu from './menu';
import '../CSS/boton.css'

function Burguer(props) {

    return(

        <div className= {`icon nav-icon-6 ${props.clicked ? 'open' : ''}`} onClick={props.handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>


    );
    
}


export default Burguer;