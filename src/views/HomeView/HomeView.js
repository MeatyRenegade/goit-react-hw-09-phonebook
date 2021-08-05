import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Welcome to your handy Phonebook App{' '}
        <span role="img" aria-label="Welcome icon">
          📓
        </span>
      </h1>
    </div>
  </div>
);

export default HomeView;
