import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handelChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.login_box}>
          <h2>LOGIN</h2>

          <form onSubmit={this.handelSubmit}>
            <div className={styles.user_box}>
              <input
                type="text"
                name="email"
                required
                value={email}
                onChange={this.handelChange}
              />
              <label>Username</label>
            </div>
            <div className={styles.user_box}>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={this.handelChange}
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
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
