import Grid from '@mui/material/Grid';
import TitleInit from './components/TitleInit';
import { useQuoteVehicle } from './hooks/useQuoteVehicle';
import { FormProvider } from 'react-hook-form';
import styles from './VehicleQuotePage.module.scss';
import { useFormErrors } from '../../hooks/useFormErrors';
import DescriptionTermsAndCondition from './components/DescriptionTermsAndCondition';
import { 
  FormError,
  PatternField,
  ActionButton,
  InputField,
  CheckBoxField,
  SelectField,
} from '../../components/forms';

const VehicleQuotePage = () => {

  const {
    form,
    onSubmit,
    isLoading,
  } = useQuoteVehicle();

  const {
    handleSubmit,
  } = form;

  const optionsTypeDocument = [
    { label: 'DNI', value: 'DNI' }
  ];

  const { hasErrors, fieldErrors } = useFormErrors([
    'dni', 
    'phone', 
    'carPlace',
    'termsAndConditions'
  ], form);

  return (
    <div>
      <Grid container>
        <TitleInit />
        <Grid item md={8} xs={12} className={styles.ctn__form}>
          
          <div className={styles.form}>
            <FormProvider {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form__title}>
                  Déjanos tus datos
                </div>
                <div className={styles.ctn__document}>
                  <SelectField
                    name="typeDocument"
                    options={optionsTypeDocument}
                  />
                  <PatternField
                    name="dni"
                    format="########"
                    placeholder="Nro. de doc"
                  />
                </div>
                <div>
                  {hasErrors && <FormError message={fieldErrors.dni?.message} />}
                </div>
                <div className={styles.ctn__input}>
                  <PatternField
                    name="phone"
                    format="#########"
                    placeholder="Celular"
                  />
                </div>
                <div>
                  {hasErrors && <FormError message={fieldErrors.phone?.message} />}
                </div>
                <div className={styles.ctn__carPlace}>
                  <InputField
                    name="carPlace"
                    placeholder="Placa"
                    maxLength={6}
                  />
                </div>
                <div>
                  {hasErrors && <FormError message={fieldErrors.carPlace?.message} />}
                </div>
                <div className={styles.ctn__general__terms}>
                  <CheckBoxField
                    name="termsAndConditions"
                  />
                  <DescriptionTermsAndCondition/>
                </div>
                <div>
                  {hasErrors && <FormError message={fieldErrors.termsAndConditions?.message} />}
                </div>
                <div className={styles.ctn__actionBtn}>
                  <ActionButton
                    isLoading={isLoading}
                    title='COTÍZALO'
                    type='submit'
                  />
                </div>
              </form>
            </FormProvider>
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default VehicleQuotePage;
