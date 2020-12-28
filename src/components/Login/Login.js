import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../redux/actions/userActions';
import {Link} from 'react-router-dom';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { loginUser: userLogin, history } = this.props;

    const { email, password, username } = this.state;
    userLogin(
      {
        user: {
          username,
          email,
          password,
        },
      },
      history,
    );
  };

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

render() {
    const {username, email, password} = this.state
    return (
      <div className="login">
        <h1>Sign in</h1>      
        <p>Hello there! Sign in and start managing your system</p>  
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />         
          <button type="submit">
            Sign In
          </button>          
          <div className="sgnup">
            or <Link to='/signup'>Sign up</Link>
          </div>
          
         </form>
      </div>
    );
  }
}
export const mapDispatchToProps = () => ({
  loginUser,
});

export const mapStateToProps = state => ({
  login: state.login,
  error: state.login.error,
});

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  login: PropTypes.shape({}),
  error: PropTypes.shape({}),
  history: PropTypes.shape({}),
};

Login.defaultProps = {
  history: {},
  error: {},
  login: { isLoading: false },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Login);
