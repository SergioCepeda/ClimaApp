import React from 'react';
import Style from "./Arrow.module.css";
import arrow from "./imgs/arrow.png"
import sol from "./imgs/sol.png"

const Arrow =()=> {
    return (
        <>
        <img alt="sol" className={Style.pelicula} src={sol} />
         <img alt="arrow" className={Style.flecha} src={arrow} />
         
        </>
    );
};

export default Arrow;
