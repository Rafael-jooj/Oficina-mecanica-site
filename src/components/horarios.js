import React from "react";
import './horarios.css';

const Horarios = ()=>{
    return(
        <div className="horarios">
            <div className="horarios-title">
                <h2>FUNCIONAMENTO</h2>
                <hr/>
            </div>
            <div className="horarios-lista">
                <div>
                    <h2>Horário</h2>
                    <ul>
                        <li>♦ Seg: 08:00 - 18:00</li>
                        <li>♦ Ter: 08:00 - 18:00</li>
                        <li>♦ Qua: 08:00 - 18:00</li>
                        <li>♦ Qui: 08:00 - 18:00</li>
                        <li>♦ Sex: 08:00 - 18:00</li>
                        <li>♦ Sáb: 08:00 - 12:00</li>
                        <li>♦ Dom: Fechado</li>
                    </ul>
                </div>
                <div className="horarios-local">
                    <h2>Localização</h2>
                    <a href="https://www.google.com/maps/place/JILVAN+AUTO+CENTER/data=!3m1!4b1!4m2!3m1!1s0x9324cb0600d747e9:0xf4f049d6df26cca5" target="blank"><img src="./imagens/mapa.png" alt="mapa"></img></a>
                </div>
                
            </div>
        </div>
    )
}

export default Horarios;