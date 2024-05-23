import React from 'react'
import ImageUpload from '../ImageUpload/ImageUpload';
import Bodysize from '../Bodysize/Bodysize';
import Bodytype from '../BodyType/Bodytype';

const Selection = (props) => {
    const {type, setType, setFit, gender, handleNextClick,setBodyType} = props;
  return (
    <>
        {type === 'image' ? <ImageUpload setType={setType} /> : null}
        {type === 'size' ? <Bodysize setFit={setFit} gender={gender} setType={setType} /> : null}
        {type === 'type' ? <Bodytype gender={gender} setType={setType} handleNextClick={handleNextClick} setBodyType={setBodyType}/> : null}
    </>
  )
}

export default Selection