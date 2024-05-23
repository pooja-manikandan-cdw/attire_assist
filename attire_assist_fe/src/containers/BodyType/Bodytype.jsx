import React from 'react'
import styles from './Bodytype.module.scss'
import Label from '../../components/Label/Label';

const Bodytype = (props) => {
    const { gender, handleNextClick } = props;

    const femaleBodyType = [
        {
            id: "muscular",
            label: "Muscular",
        },
        {
            id: "normal",
            label: "Normal",
        },
        {
            id: "plusSized",
            label: "Plus Sized",
        },
        {
            id: "slim",
            label: "Slim",
        },
    ]
    const maleBodyType = [
        {
            id: "muscular",
            label: "Muscular",
        },
        {
            id: "normal",
            label: "Normal",
        },
        {
            id: "plusSized",
            label: "Plus Sized",
        },
        {
            id: "slim",
            label: "Slim",
        },
    ]
  return (
    <div>
        <Label label="Select your body type" />
        <div className={styles.container}>
            <button onClick={() => handleNextClick(3)} className={styles.nextButton}>

            </button>
        </div>
    </div>
  )
}

export default Bodytype