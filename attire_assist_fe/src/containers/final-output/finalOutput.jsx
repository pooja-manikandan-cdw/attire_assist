import styles from "./finalOutput.module.scss";
import getFitService from "../../service/fitImageService";
import Grid from "../../components/Grid/Grid";

const FinalOutput = (props) => {
  const { attire, fit } = props;
  const dressArray = getFitService(attire.toLowerCase(), fit.toLowerCase());


  const dressCards = dressArray.map((data) => (
    <div>
      <Grid label={data.name} image={data.dress} />
      <div className={styles.buttonWrapper}>
          <a href={data.amazon} rel="noreferrer" target="_blank"><button className={styles.amazonButton}>Amazon</button></a>
          <a href={data.flipkart} rel="noopener noreferrer" target="_blank"><button className={styles.flipkartButton}>Flipkart</button></a>
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
