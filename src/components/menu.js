import React, {useState} from "react";
import '../CSS/index.css';
import Burguer from "./boton";

export default function Menu() {
    const [clicked , setClicked] = useState(false);
    const handleClick = () =>{
        setClicked(!clicked);
    }

    return(
        
        <>
            <nav>

                <div className="tittle">
                    <h1>Gymnasio <span>bla</span></h1> 
                </div>

                <div className= {`links ${clicked ? 'active' : ''}` } >

                    
                        <a href="#" >Home</a>
                        <a href="#" >About Us</a>
                        <a href="#" >Service</a>
                        <a href="#" >Prices</a>
                    

                </div> 
                <div className="burguer">
                    <Burguer clicked = {clicked} handleClick = {handleClick}/>
                </div>

                <div className= {`initial ${clicked ? 'active' : ''}` } ></div>
                
            </nav>
            
        
        
        </>

    );
    
}