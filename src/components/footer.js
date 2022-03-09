import React from "react";
import './footer.css';

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src="./imagens/Logo.png" alt="logo"></img>
                <p>JILVAN AUTO CENTER</p>
            </div>
            <div className="footer-info">
                <div><h3>Contato</h3></div>
                <div>
                    <p>(63)99208-9152</p>
                    <p>(63)98459-3121</p>
                </div>
                <button className="button-ligar"><a href="tel:+5563992089152">Ligar Agora</a></button>
            </div>
            <div className="footer-redes">
                <div><h3>Redes Sociais</h3></div>
                <ul>
                    <li><img src="./imagens/instagram.png" alt="intagram"></img></li>
                    <li><img src="./imagens/face.png" alt="facebook"></img></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Footer;