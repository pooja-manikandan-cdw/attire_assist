import React from 'react';
import logo from '../../../assets/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo} alt="logo" />
        <span>ATTIRE ASSIST</span>
    </div>
  )
}

export default Header