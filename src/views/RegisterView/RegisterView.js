import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();
  const onRegister = useCallback(user => dispatch(register(user)), [dispatch]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

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

    onRegister({ name, email, password });

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.register_box}>
        <h2>SIGN-UP</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.user_box}>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={handleChange}
            />
            <label>Name</label>
          </div>
          <div className={styles.user_box}>
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
            <label>E-mail</label>
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

export default RegisterView;
