import React from "react";
import "../CSS/index.css"


const Components = (props) =>{

    return(

        <div className="container">

            <img className="photo" src = {props.photo} alt="About Us"/>

            <article>
                <h3>{props.tittle}</h3>

                <p>{props.paragrapho1}</p>
                <p>{props.paragrapho2}</p>
            </article>

        </div>

    );

}

export default Components;