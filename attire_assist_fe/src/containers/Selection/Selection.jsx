import React from 'react'
import ImageUpload from '../ImageUpload/ImageUpload';
import Bodysize from '../Bodysize/Bodysize';
import Bodytype from '../BodyType/Bodytype';

const Selection = (props) => {
    const {type, setType, gender, handleNextClick} = props;
  return (
    <>
        {type === 'image' ? <ImageUpload setType={setType} /> : null}
        {type === 'size' ? <Bodysize gender={gender} setType={setType} /> : null}
        {type === 'type' ? <Bodytype gender={gender} setType={setType} handleNextClick={handleNextClick} /> : null}
    </>
  )
}

export default Selection