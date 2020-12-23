import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Login from '../Login';
import Signup from '../Signup';
// import Home from './Home';
import Cars from '../components/Cars/Cars';
import Car from '../components/CarView/Car';
import Nav from '../containers/Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
componentDidMount() {
  this.loginStatus()
}
loginStatus = () => {
  axios.get('http://localhost:3001/logged_in', 
  {withCredentials: true})    
.then(response => {
    if (response.data.logged_in) {
      this.handleLogin(response)
    } else {
      this.handleLogout()
    }
  })
  .catch(error => console.log('api errors:', error))
  }
  
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    })
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  
  render() {
    return (
      <div>
      <Nav />
        <Switch>
          <Route exact path='/' component={Cars}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path="/:id" component={Car} />
        </Switch>
      </div>
    );
  }
}
export default App;