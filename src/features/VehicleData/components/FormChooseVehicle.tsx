import { FormProvider } from "react-hook-form";
import { useChooseVehicle } from "../hooks/useChooseVehicle";
import styles from "../VehicleDataPage.module.scss";
import { ActionButton, SelectField } from "../../../components/forms";
import { optionsCarBrands } from "../data/CarBrands";

const FormChooseVehicle = () => {

  const {
    form,
    onSubmit,
    isLoading,
  } = useChooseVehicle();

  const {
    handleSubmit,
  } = form;

  const optionsYear = Array.from({ length: 5 }, (_, index) => {
    const year = 2020 + index;
    return {
      label: year.toString(),
      value: year.toString(),
    };
  });

  return (
    <div className={styles.form__dataCar}>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <SelectField
              name="year"
              options={optionsYear}
              label="Año"
              placeholder="Escoja una opción"
            />
          </div>
          <div className={styles.ctn__brand}>
            <SelectField
              name="brand"
              options={optionsCarBrands}
              label="Marca"
              placeholder="Escoja una marca"
            />
          </div>
          <div className={styles.ctn__actionBtn}>
            <ActionButton
              isLoading={isLoading}
              title='CONTINUAR'
              type='submit'
            />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default FormChooseVehicle;
