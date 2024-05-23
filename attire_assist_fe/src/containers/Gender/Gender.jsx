import React from 'react';
import styles from './Gender.module.scss'
import Grid from '../../components/Grid/Grid';
import man from '../../assets/manWoBg.png'
import woman from '../../assets/womanWoBg.png'
import Label from '../../components/Label/Label';

const Gender = (props) => {

    const { gender, setGender, handleNextClick } = props;
    const handleClick = (value) => {
        setGender(value)
    }

  return (
    <div>
        <div className={styles.container}>
        <h1 className={styles.genderTitle}>Select your gender</h1>
        <div className={styles.wrapper}>
            <Grid label="Man" active={gender==='man'} image={man} onClick={() => handleClick('man')} />
            <Grid label="Woman" active={gender==='woman'} image={woman} onClick={() => handleClick('woman')} />
            <button className={styles.nextButton} onClick={() => handleNextClick(2)}>Next</button>
        </div>
        </div>
    </div>
  )
}

export default Gender