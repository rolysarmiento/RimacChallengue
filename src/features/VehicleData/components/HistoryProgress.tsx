import { Grid } from "@mui/material"
import styles from '../VehicleDataPage.module.scss';
import ProgressIcon from "../../../components/icons/IconProgress";
import IconStep1 from "../../../components/icons/IconStep1";
import IconStep2 from "../../../components/icons/IconStep2";

const HistoryProgress = () => {
  return (
    <Grid item md={3} xs={false} className={styles.ctn__history}>
      <div className={styles.ctn__progress}>
        <div className={styles.ctn__description}>
          <IconStep1 />
          <span>
            Datos del auto
          </span>
        </div>
        <div className={styles.progress}>
          <ProgressIcon />
        </div>
        <div className={styles.ctn__description}>
          <IconStep2 />
          <span className={styles.disabled}>
            Arma tu plan
          </span>
        </div>
      </div>
    </Grid>
  )
}

export default HistoryProgress