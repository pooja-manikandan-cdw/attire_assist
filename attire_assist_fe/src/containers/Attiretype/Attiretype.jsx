import React from 'react';
import styles from "./Attiretype.module.scss";
import dumImg from "../../assets/manWoBg.png";
import Grid from '../../components/Grid/Grid';
import muscularManImg from '../../assets/Body Type/men/Muscular man.png';
import normalManImg from '../../assets/Body Type/men/Normal man.png';
import plusSizeManImg from '../../assets/Body Type/men/Plus Sized man.png';
import slimManImg from '../../assets/Body Type/men/Slim man.png';
import muscularWomanImg from '../../assets/Body Type/women/Muscular woman.png';
import normalWomanImg from '../../assets/Body Type/women/Normal woman.png';
import plusSizeWomanImg from '../../assets/Body Type/women/Plus Sized woman.png';
import slimWomanImg from '../../assets/Body Type/women/Slim Woman.png';

const Attiretype = (props) => {


  const {gender,handleNextClick} = props;
  const attireImages = {
    man:{
      muscular:muscularManImg,
      normal:normalManImg,
      plusSize:plusSizeManImg,
      slim:slimManImg
    },
    woman:{
      muscular:muscularWomanImg,
      normal:normalWomanImg,
      plusSize:plusSizeWomanImg,
      slim:slimWomanImg
    }
  }

  

  const bodyTypes = ["muscular","normal","plusSize","slim"];

  const fitCards = bodyTypes.map((data)=>(
    <Grid label={data} image={attireImages[gender][data]}/>
  ));

  return (
    <div>
        <div className={styles.container}>
          {fitCards}
        </div>
    </div>
  )
}

export default Attiretype