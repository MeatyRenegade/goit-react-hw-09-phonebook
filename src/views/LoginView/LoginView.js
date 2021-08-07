import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import styles from './LoginView.module.css';

import React from 'react';

const LoginView = () => {
  const dispatch = useDispatch();
  const onLogin = useCallback(user => dispatch(logIn(user)), [dispatch]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.log('Something went wrong, try again!');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onLogin({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h2>LOGIN</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.user_box}>
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
            <label>Username</label>
          </div>
          <div className={styles.user_box}>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
