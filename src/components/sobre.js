import React from "react";
import './sobre.css';

const Sobre = ()=>{
    return(
        <div className="sobre">
            <div className="sobre-title">
                <h2>SOBRE NÓS</h2>
                <hr/>
            </div>
            <div className="sobre-conteudo">
                <p>Nossa empresa atua há dois anos no mercado, nossos serviços são destinados a veículos de passeio e utilitários</p>
                <p>Trabalhamos com o fornecimento de serviços e peças de primeira linha de reposição</p>
                <p>Para a comodidade do cliente contamos com o serviço de leva e trás</p>
            </div>
            <div className="sobre-imagens">
                <ul>
                    <li><img src="./imagens/baner.jpg" alt="logo"></img></li>
                    <li><img src="./imagens/foto.jpg" alt="foto"></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Sobre;