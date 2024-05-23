import React, { useEffect, useState } from 'react'
import styles from './Bodytype.module.scss'
import Label from '../../components/Label/Label';
import Grid from '../../components/Grid/Grid'

const Bodytype = (props) => {
    const { gender, handleNextClick,setType,setBodyType } = props;
    const [genderKey, setGenderKey] = useState("")
    const [selectedType, setSelectedType] = useState("");

    const maleBodyType = [
        {
            id: "muscular",
            label: "Muscular",
            image: "./assets/muscular",
        },
        {
            id: "normal",
            label: "Normal",
            image: "./assets/normal"
        },
        {
            id: "plusSized",
            label: "Plus Sized",
            image: "./assets/plusSized"
        },
        {
            id: "slim",
            label: "Slim",
            image: "./assets/slim"
        },
    ]

    const handleTypeClick = (selectedTypeClicked,selectedType) => {
        setBodyType(selectedType);
        setSelectedType(selectedTypeClicked);
    }

    useEffect(() => {
        gender==='man'?
        setGenderKey("Man"): setGenderKey("Woman")
    }, [])
  return (
    <div>
        <h1 className={styles.bodyTypeTitle}>Select your body type</h1>
        <div className={styles.container}>
            {maleBodyType.map((data) => (
                <Grid onClick={() => handleTypeClick(data.id,data.label)} active={selectedType===data.id} label={data.label} image={`${data.image}${genderKey}.png`} />
            ))}
        </div>
            <button onClick={() => handleNextClick(3)} className={styles.nextButton}>
                Proceed
            </button>
    </div>
  )
}

export default Bodytype