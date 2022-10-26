import React from "react";
import Plans from "./plans"


function Services() {

    const tittle = ["Basic Plan" , "Regular plan" , "expert plan"];
    const time = ["month" , "year"];
    const price = ["US$10 " , "US$25" , "US$100"];
    const text = ["You can use all the diferents physics zones and only you will one gym station. " , "You have the same services with the basic plan, plus food plan with professionals, to create training plans with differences trainers to own necessities and you can invite 3 friends in the weekend." , "You have the same services with the basic plan, plus permission to go to all gym station in the country and join to virtual sessions since your home."]
    
    return(
        <div className="services">
            <h2>Prices</h2>
            <div className="options">
                <Plans tittle = {tittle[0]} time = {time[0]} price = {price[0]} text = {text[0]}/>
                <Plans tittle = {tittle[1]} time = {time[0]} price = {price[1]} text = {text[1]}/>
                <Plans tittle = {tittle[2]} time = {time[1]} price = {price[2]} text = {text[2]}/>
            </div>
        </div>
    );
}

export default Services;