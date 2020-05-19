import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './style.css';


class Filmes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmes: []
        }

        this.loadFilmes = this.loadFilmes.bind(this);
    }


    componentDidMount() {

        this.loadFilmes();

    }

    loadFilmes() {
        const url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

        fetch(url)
            .then((response) => (response.json()))
            .then((json) => {
                this.setState({ filmes: json });
            })
    }

    render() {
        return (
            <div className='container-main'>
                <section className='section-movies'>
                    <h2>Campeões de Bilheteria</h2>
                    {this.state.filmes.map((filme) => {
                        return (
                            <article key={filme.id} className='article-movie'>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt="capa" />
                                <Link>Acessar</Link>
                                <p>{filme.sinopse}</p>
                            </article>
                        );
                    })}
                </section>
            </div>
        );
    }
}

export default Filmes;