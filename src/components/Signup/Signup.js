import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {signUpUser} from '../../redux/actions/userActions';
import './signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
  handleSubmit = event => {
    event.preventDefault();
    
    const { password: statePassword, password_confirmation: confirmPassword } = this.state;
    if (statePassword === confirmPassword) {
      const { signUpUser: userSignup } = this.props;
      const {username, email, password, password_confirmation} = this.state
      userSignup({
        user: {
          username,
          email,
          password,
          password_confirmation
        },
      });
      this.setState = { 
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
     };
      this.redirect()
    }
  };


redirect = () => {
    this.props.history.push('/')
  }
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  };
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

render() {
  const {username, email, password, password_confirmation} = this.state
  return (
    <div className="signup">
      <h1>Sign Up</h1>        
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
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={this.handleChange}
        />
              
        <button placeholder="submit" type="submit">
          Sign Up
        </button>
            
      </form>
    </div>
    );
  }
}

Signup.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  // error: PropTypes.shape({}),
  // signup: PropTypes.shape({}),
};

// Signup.defaultProps = {
//   error: {},
//   signup: { isLoading: false },
// };

// const mapDispatchToProps = () => ({
//   signUpUser,
// });

// const mapStateToProps = state => ({
//   error: state.signup.error,
//   signup: state.signup,
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps(),
// )(Signup);
const mapDispatchToProps = dispatch => {
    return {
      signUpUser: (userInfo) => dispatch(signUpUser(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(Signup)