import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handelChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.register_box}>
          <h2>SIGN-UP</h2>

          <form onSubmit={this.handelSubmit} autoComplete="off">
            <div className={styles.user_box}>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={this.handelChange}
              />
              <label>Name</label>
            </div>
            <div className={styles.user_box}>
              <input
                type="text"
                name="email"
                required
                value={email}
                onChange={this.handelChange}
              />
              <label>E-mail</label>
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
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
