import React from 'react';
import styles from './Grid.module.scss';

const Grid = (props) => {
    const { label, image, onClick, active } = props;
  return (
    <div className={`${styles.grid} ${active && styles.active}`} onClick={onClick}>
        <div className={styles.left}>
            <img src={image} alt={label} />
        </div>
        <div className={styles.right}>
            <p>{label}</p>
        </div>
    </div>
  )
}

export default Grid