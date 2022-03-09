import React from "react";
import './services.css';

const Services = ()=>{
    return(
        <div className="services">
            <div className="services-title">
                <h2>SERVIÇOS</h2>
                <hr/>
            </div>
            <div className="services-info">
                <p>DENTRO DA NOSSA OFICINA MECÂNICA SEU CARRO CONTARÁ COM OS MELHORES SERVIÇOS.</p>
                <p>Abaixo está uma lista com nossos princiapis serviços.</p>    
            </div>
            <div className="services-lista">
                <ul>
                    <li>
                        ♦ Diagnóstico completo<br/>
                        ♦ Troca de óleo e filtros<br/>
                        ♦ Troca de embreagem<br/>
                        ♦ Limpeza de arrefecimento<br/>
                    </li>
                    <li>
                        ♦ Manutenção preventiva<br/> 
                        ♦ Manutenção corretiva<br/>
                        ♦ Revisão geral de férias<br/>
                        ♦ Sistema de freios<br/>
                    </li>
                    <li>
                        ♦ Sistema de injeção<br/>
                        ♦ Troca de correia dentada<br/>
                        ♦ Revisão completa de suspensão<br/>
                        ♦ Higienização do ar condicionado<br/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Services;