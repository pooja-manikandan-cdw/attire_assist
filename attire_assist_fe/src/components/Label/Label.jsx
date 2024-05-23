import React from 'react';
import styles from './Label.module.scss'

const Label = (props) => {
    const { label } = props;
  return (
    <div className={styles.label}>{label}</div>
  )
}

export default Label;