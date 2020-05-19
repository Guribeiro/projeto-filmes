import React, {Component} from 'react';

import './reset.css';

import './global.css';

import Routes from './routes';


class App extends Component{
  

  render(){
    return(
      <div className="App">
        <Routes/>
      </div>
    )
  }
}

export default App;
