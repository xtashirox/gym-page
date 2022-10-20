import React from "react";
import '../CSS/index.css';
import Bgvideo from '../media/portada.mp4'




function Portada(){





    return(
        <main id="portada">
            <div className="promo">
                <div className="letter">
                    <h2>SEEK YOUR</h2>
                    <h2>BEST VERSION</h2>
                </div>
                <p className="pre-button">This is your first step:</p>
                <button  className ='boton' type="button" onClick={console.log('prueba')}>GET STARTED</button>
                <video  autoPlay loop muted>
                    <source src={Bgvideo} type="video/mp4"></source>
                </video>

                <div className="capa"></div>
                

            </div>

        </main>
    );
}


export default Portada;