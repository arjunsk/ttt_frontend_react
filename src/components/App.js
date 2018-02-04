import React, { Component } from 'react';
import Table from './Table';
import {NavigationBar} from './NavigationBar';
import Search from './Search';
import './App.css';

class App extends Component {
 
  render() {

    return (
      <div>
        <NavigationBar/>
        <div className="container">

          <div className="page-header" ></div>

          <Search />

          <Table/>

        </div>   
      </div>  
    );
  }
}

export default App;
