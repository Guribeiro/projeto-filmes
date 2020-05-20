import React, { Component } from 'react';

import './style.css';

import { FiTwitter, FiInstagram, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';

import imgLogo from '../../assets/udemy-logo.png';


class Footer extends Component {


    render() {
        return (
            <div className='footer'>
                <figure>
                    <a href="https://www.udemy.com/">
                        <img src={imgLogo} alt="udemy-logo" />
                    </a>
                    <figcaption>
                        Esse projeto faz parte do material de um dos cursos sobre React js na
                        plataforma de ensino a distância Udemy
                    </figcaption>
                </figure>
                <div className='container-infos'>
                    <h3>Informaçõs importantes</h3>
                    <div className="infos">
                        <section>
                            <p>
                                * Todo o conteúdo projetado nesse site é de estado meramente ilustrativo, não sendo verídico nenhuma das informações mostradas aqui. Os únicos objetivos desse projeto é melhorar
                                minhas habilidades como desenvolvedor front-end e me promover profissionalmente.
                            </p>
                        </section>

                        <section>
                            
                            <ul>
                                <li>
                                    <a href="https://sujeitoprogramador.com/r-api/?api=filmes">API utilizada nesse projeto</a>
                                </li>
                                <li>
                                    <a href="https://sujeitoprogramador.com">sujeitoprogramador.com</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="container-author">
                    <h3>
                        Esse site foi projetado por:
                        Gustavo Henrique Ribeiro Dias
                    </h3>
                </div>
                <div className="social-links">
                    <nav>
                        <a href="https://twitter.com/Guribeir">
                            <FiTwitter color='white' size='22' />
                        </a>
                        <a href="https://www.instagram.com/gustavhrd/?hl=pt-br">
                            <FiInstagram color='white' size='22' />
                        </a>
                        <a href="https://github.com/Guribeiro">
                            <FiGithub color='white' size='22' />
                        </a>
                        <a href="https://www.linkedin.com/in/gustavo-henrique-ribeiro-b58385184/">
                            <FiLinkedin color='white' size='22' />
                        </a>
                        <a href="https://www.facebook.com/gustavo.ribeiro.58173">
                            <FiFacebook color='white' size='22' />
                        </a>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Footer;