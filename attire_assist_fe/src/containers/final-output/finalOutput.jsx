import styles from "./finalOutput.module.scss";
import getFitService from "../../service/fitImageService";
import Grid from "../../components/Grid/Grid";

const FinalOutput = (props) => {
  const { attire, fit } = props;
  const dressArray = getFitService(attire.toLowerCase(), fit.toLowerCase());

  const dressCards = dressArray.map((data) => (
    <Grid label={data.name} image={data.dress} />
  ));

  return (
    <div>
      <div className={styles.dressContainer}>{dressCards}</div>
    </div>
  );
};

export default FinalOutput;
