/* eslint-disable max-len, camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Spinner';
// import { SET_MESSAGE } from '../../redux/actions/types';
import { register } from '../../redux/actions/index';
import './signup.scss';

toast.configure();

function Signup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'password_confirmation') {
      setPasswordConfirmation(e.target.value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (password === password_confirmation) {
      setLoading(true);
      dispatch(register(username, email, password, password_confirmation))
        .then(() => {
          props.history.push('/login');
        })
        .catch(() => {
          setLoading(false);
          setUsername('');
          setEmail('');
          setPassword('');
          setPasswordConfirmation('');
        });
    } else {
      toast.error('passwords must match', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
      });
    }
  };
  if (loading) {
    return (<Spinner />);
  }
  return (
    <div className="signup">
      <h1>Sign Up</h1>
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
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>

      </form>
    </div>
  );
}
Signup.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default Signup;
