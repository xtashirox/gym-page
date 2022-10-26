import React from "react";
import Foto1 from "../img/foto1.jpg"
import Foto2 from "../img/foto2.jpg"
import Foto3 from "../img/foto3.jpg"
import "../CSS/index.css"



function Intro() {

    return(

        <div className="intro">
            <img src = {Foto1}  />
            <img src={Foto2}  />
            <img src={Foto3}  />
        </div>

    );


}


export default Intro;