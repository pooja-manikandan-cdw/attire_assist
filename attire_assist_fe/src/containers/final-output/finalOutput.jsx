import styles from "./finalOutput.module.scss";
import getFitService from "../../service/fitImageService";
import Grid from "../../components/Grid/Grid";

const FinalOutput = (props) => {
  const { attire, fit } = props;
  const dressArray = getFitService(attire.toLowerCase(), fit.toLowerCase());


  console.log('dressArray', attire, fit, dressArray)
  const dressCards = dressArray.map((data) => (
    <div>
      <Grid label={data.name} image={data.dress} />
      <div className={styles.buttonWrapper}>
          <a href={data.amazon} target="_blank" rel="noopener"><button className={styles.amazonButton}>Amazon</button></a>
          <button className={styles.flipkartButton}>Flipkart</button>
        </div>
    </div>
  ));

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.dressContainer}>{dressCards}</div>

      </div>
        
    </>
  );
};

export default FinalOutput;
