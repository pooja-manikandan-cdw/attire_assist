import React, { useState } from 'react';
import background from '../../assets/background-1.jpg'
import styles from './ImageUpload.module.scss';
import uploadLogo from '../../assets/uploadLogo.png'
import man from '../../assets/manWoBg.png'
import woman from '../../assets/womanWoBg.png'

const ImageUpload = (props) => {

    const {setType} = props;
    const uploadImageHandler = () => {
        console.log('image')
    }
    const handleLinkClick = () => {
        console.log('clcik')
    }
  return (
    <div className={styles.container}>

        <img src={background} alt='background' />
        
        <div className={styles.positionContainer}>
            <div className={styles.poseContainer}>
                <img src={man} alt='man pose' />
                <img src={woman} alt='woman pose' />
            </div>
            <div className={styles.detailsContainer}>
                <img src={uploadLogo} alt='upload' />
                <p>Drag and drop your image here</p>
                <p>or</p>
                <button onClick={uploadImageHandler}>Upload Image</button>
                <h6 onClick={handleLinkClick}>Use my Body Size instead</h6>
                <h6 onClick={handleLinkClick}>Use my Body Type instead</h6>
            </div>
        </div>
        <p className={styles.poseDescription}>Strike this pose</p>

      </div>
  )
}

export default ImageUpload