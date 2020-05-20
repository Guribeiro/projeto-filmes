import React, { Component } from 'react';

import './style.css';

import notFoundImg from '../../assets/not-found.jpg';


class Undefined extends Component {
    

    render() {
        return (
            <figure className='main'>
                <img src={notFoundImg} alt=""/>
            </figure>
        );
    }
}

export default Undefined;