import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Filmes from './pages/Filmes';
import Sobre from './pages/Sobre';
import Undefined from './pages/Undefined';

import Header from './components/Header';


export default function Routes() {
    return (

        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contato' component={Contato} />
                <Route exact path='/filmes' component={Filmes} />
                <Route exact path='/sobre' component={Sobre} />
                <Route path='*' component={Undefined} />
            </Switch>
        </BrowserRouter>
    );
}