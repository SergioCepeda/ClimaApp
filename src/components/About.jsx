import React from "react";
import styles from "./About.module.css";
import sol from "./imgs/sol.png"
import arrow from "./imgs/arrow.png"

const About = () => {
    return (
        <>  
             <img alt="sol" className={styles.pelicula} src={sol} />
             <img alt="arrow" className={styles.flecha} src={arrow} />

            <div className = { styles.sobreMi }>
                <div></div>
                <p>
                     <br/> Tecnologias aplicadas: <br/> HTML • JSX • React-JavaScript • Redux • CSS 
                    <hr />
                    Visita mi linkedin en : <a href="https://www.linkedin.com/in/sergio-cepeda-dev/" target="_BLANK" rel="noreferrer">LinkedIn</a> y mi github <a href="https://github.com/SergioCepeda" target="_BLANK" rel="noreferrer">GitHub</a>! Gracias por tu visita. 
                </p>
            </div>
        </>
    );
};

export default About;
