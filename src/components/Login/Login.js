/* eslint-disable react/prop-types, react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginUserFetch } from '../../redux/actions/actionCreators';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { loginUserFetch: userLogin } = this.props;

    const { email, password, username } = this.state;
    userLogin(
      {
        user: {
          username,
          email,
          password,
        },
      },

    );
    this.redirect();
  };

redirect = () => {
  this.props.history.push('/');
}

handleChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
};

render() {
  const { username, email, password } = this.state;
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
          or
          {' '}
          <Link to="/signup">Sign up</Link>
        </div>

      </form>
    </div>
  );
}
}
Login.propTypes = {
  loginUserFetch: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  loginUserFetch: userInfo => dispatch(loginUserFetch(userInfo)),
});

export default connect(null, mapDispatchToProps)(Login);
