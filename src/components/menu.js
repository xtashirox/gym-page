import React from "react";
import '../CSS/menu.css';

export default function Menu() {

    return(

        <nav>

            <div>
                <h1>Gymnasio</h1>
            </div>

            <table>

                <tr>
                    <td><a href="#"><p>Home</p></a></td>
                    <td><a href="#"><p>About Us</p></a></td>
                    <td><a href="#"><p>Service</p></a></td>
                    <td><a href="#"><p>Prices</p></a></td>
                </tr>
            
            </table> 
        </nav>

    );
    
}