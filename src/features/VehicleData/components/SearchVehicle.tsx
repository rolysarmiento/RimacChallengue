import imgCar from '../../../assets/images/VehicleData/icon_car.png';
import styles from '../VehicleDataPage.module.scss';
import { useMediaQuery } from '@mui/material';
import LineaProgreso from './LineaProgreso';

const SearchVehicle = () => {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <>
      {isSmallScreen ? (
        <>
          <LineaProgreso />
        </>
      ) : (
        <>
          <div className={styles.ctn__help}>
            <div className={styles.description__help}>
              AYUDA
            </div>
            <div className={styles.ctn__imgHelp}>
              <div className={styles.ctn__descHelp}>
                <div>
                  ¿No encuentras el modelo?
                </div>
                <div className={styles.btn__clicHere}>
                  CLIC AQUÍ
                </div>
              </div>
              <div className={styles.ctn__flexImg}>
                <img
                  src={imgCar}
                  width={48}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>

  )
}

export default SearchVehicle;
