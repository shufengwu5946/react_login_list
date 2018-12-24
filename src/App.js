import React, { Component } from 'react';
import './App.css';
import Login from "./LogIn/index";
import Dashboard from "./Dashboard/index";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { login: false, userId: 0,userName:"" }
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  handleLoginChange(state){
    this.setState(state);
  }

  render() {
    return (
      <div>
        {
          this.state.login ? 
          <Dashboard userId = {this.state.userId} userName = {this.state.userName} handleLoginChange = {this.handleLoginChange}/> : 
          <Login handleLoginChange = {this.handleLoginChange}/>
        }
      </div>
    );
  }
}

export default App;
