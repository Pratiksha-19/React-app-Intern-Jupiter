import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navi from './components/Navi';
import { FaRegUserCircle} from 'react-icons/fa';
import MenuBar from './MenuBar';
// import Settings from './components/Settings';
// import Notification from './components/Notification';
// import Task1 from './components/Task1';

class App extends Component {
  render() {
    return (
      <div>
        <Navi/>
        <MenuBar/> 
      </div>
    );
  }
}


export default App;
