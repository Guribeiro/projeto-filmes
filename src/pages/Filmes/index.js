import React, { Component } from 'react';

import './style.css';

class Filmes extends Component {
   
    constructor(props){
        super(props)

        this.state = {
            filme: [],
            teste: ''
        }
        this.loadFilme = this.loadFilme.bind(this);
    }

    componentDidMount(){
        this.loadFilme();
    }
    
    loadFilme(){
        const {id} = this.props.match.params
        
        const url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;

        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            this.setState({filme: json})
            console.log(json)
        })

        
    }

    render() {
        return (
            <div>
                <h1>{this.state.filme.nome}</h1>
                <figure>
                    <img src={this.state.filme.foto} alt=""/>
                </figure>
            </div>
        );
    }
}

export default Filmes;