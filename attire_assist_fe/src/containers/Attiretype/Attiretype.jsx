import React from 'react';
import styles from "./Attiretype.module.scss";
import Grid from '../../components/Grid/Grid';
import formalDressManImg from '../../assets/Attire Type (Men)/Formal-removebg-preview.png';
import casualDressManImg from '../../assets/Attire Type (Men)/Casual-removebg-preview.png';
import sportDressManImg from '../../assets/Attire Type (Men)/sport-removebg-preview.png';
import trendyDressManImg from '../../assets/Attire Type (Men)/Trendy-removebg-preview.png';
import formalDressWomanImg from '../../assets/Attire Type (Women)/formal-woman.png';
import casualDressWomanImg from '../../assets/Attire Type (Women)/casual-woman.png';
import sportDressWomanImg from '../../assets/Attire Type (Women)/sport-woman.png';
import trendyDressWomanImg from '../../assets/Attire Type (Women)/trendy-woman.png';

const Attiretype = (props) => {

  const {gender,handleAttireClick} = props;
  const attireImages = {
    man:{
      formal:formalDressManImg,
      casual:casualDressManImg,
      sport:sportDressManImg,
      trendy:trendyDressManImg
    },
    woman:{
      formal:formalDressWomanImg,
      casual:casualDressWomanImg,
      sport:sportDressWomanImg,
      trendy:trendyDressWomanImg
    }
  }

  const bodyTypes = ["formal","casual","sport","trendy"];

  const fitCards = bodyTypes.map((data)=>(
    <Grid label={data} image={attireImages[gender][data]} onClick={handleAttireClick(data)}/>
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