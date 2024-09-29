import IconBack from "../../../components/icons/IconBack";
import { useInitStore } from "../../../store/initStore";
import FormChooseVehicle from "./FormChooseVehicle";
import styles from '../VehicleDataPage.module.scss';
import { useNavigate } from "react-router-dom";

const ChooseVehicle = () => {

  const vehicle = useInitStore(state => state.vehicle);
  const nameClient = vehicle?.user?.name || '';
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <div 
        className={styles.ctn__iconBack}
        onClick={handleGoBack}
      >
        <IconBack />
        <span>
          VOLVER
        </span>
      </div>
      <div className={styles.ctn__name}>
        <span>
          ¡Hola,
        </span>
        <span className={styles.name__red}>
          {` ${nameClient}!`}
        </span>
      </div>
      <div className={styles.description__size}>
        Completa los datos de tu auto
      </div>

      <FormChooseVehicle/>
      
    </div>
  )
}

export default ChooseVehicle;
