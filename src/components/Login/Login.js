/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { login } from '../../redux/actions/index';
import { SET_MESSAGE } from '../../redux/actions/types';
import './login.scss';

function Login(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { message } = useSelector(state => state.message);

  const handleChange = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(username, email, password))
      .then(response => {
        if ('error' in response) {
          dispatch({
            type: SET_MESSAGE,
            payload: response.error,
          });
          setLoading(false);
        } else {
          dispatch({
            type: SET_MESSAGE,
            payload: '',
          });
          props.history.push('/cars');
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if(loading){
    return (<Spinner />)
  }else{
  return (
    <div className="login">
      <h1>Sign in</h1>
      <p>Hello there! Sign in and start managing your system</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
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
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default Login;
