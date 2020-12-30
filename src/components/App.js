import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import React,{Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Cars from '../components/Cars/Cars';
import Car from '../components/CarView/Car';
import Nav from '../containers/Nav/Nav';
import {fetchLoggedInUser} from '../redux/actions/userActions';
import Favorites from '../containers/Favorites/Favorites';
import PageNotFound from './pageBlank';
import Home from './Home';

class App extends Component{

  componentDidMount(){
    this.loginStatus()   
  }
  loginStatus = () =>{
    this.props.fetchLoggedInUser()
  }

  render(){
   return (
    <div>
      <Nav />
      <Switch>
        <BrowserRouter>
          <Route exact path='/' component={Home}/>
          <Route exact path='/cars' component={Cars}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path="/favorites" component={Favorites} />
          <Route path="/cars/:id" component={Car} />
          {/* <Route path="*" component={PageNotFound} /> */}
        </BrowserRouter>
      </Switch>
    </div>
  );
}
}

const mapDispatchToProps = dispatch =>{
  return{
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
  }
}

export default connect(null, mapDispatchToProps)(App);