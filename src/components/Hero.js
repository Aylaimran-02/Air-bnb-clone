import React from "react";
import gridimg from '../images/gridimg.jpeg';

export default function Hero(){

return(
    <section className="hero">
        <img  className="hero-img" src={gridimg} alt="" />
        <div className="hero-center">
        <h1 className="hero-header" >Online Experiences</h1>
        <p className="hero-text" >Join unique interactive activities led by 
            one-of-a-kind hosts-all without leaving home  </p>
        </div>
        
    </section>
)




}