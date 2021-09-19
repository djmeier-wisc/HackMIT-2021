import {Nav} from './components/nav'
import './App.css';
import React, { useState } from 'react';
import About from './components/about/About'
import Finance from './components/financing/Financing'
import Scholarships from './components/scholarships/Scholarships'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/Register'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navPane: 0, loggedIn: false, username: ''}; 
    this.setNavPane = this.setNavPane.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);

    fetch('/amiloggedin', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        if (data.loggedin) {
          this.setLoggedIn(true, data.user);
        }
      });
  }

  setNavPane(value) {
    this.setState({...this.state, navPane: value});
  }

  setLoggedIn(value, username) {
    this.setState({...this.state, loggedIn: value, username: username});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Nav 
            setState={this.setNavPane}
            loggedIn={this.state.loggedIn}
            user={this.state.username}
            setLoggedIn={this.setLoggedIn}/>
          {this.state.navPane===0 && <Home/>}
          
          {this.state.navPane===2 && <Scholarships/>}
          {this.state.navPane===3 && <About/>}
          {this.state.navPane===4 && <Login onChange={this.setLoggedIn}/>}
          {this.state.navPane===5 && <Register onChange={this.setLoggedIn}/>}
        </header>
      </div>
    );
  }
}

export default App;
