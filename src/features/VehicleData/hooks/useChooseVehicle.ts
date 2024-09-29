import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useInitStore } from "../../../store/initStore";
import { useNavigate } from "react-router-dom";
import { ChooseVehicle } from "../types/vehicleData";

const schemaValidation = yup.object({
  year: yup
    .string()
    .required('El año es obligatorio.'),
  brand: yup
    .string()
    .required('La marca es obligatoria.'),
  availableGas: yup
    .boolean()
    .required('El estado de disponibilidad de gas es obligatorio.'),
  totalAmountInsured: yup
    .number()
    .positive('El monto asegurado debe ser un número positivo')
    .required('El monto asegurado es obligatorio.')
    .min(12500, 'El monto asegurado debe ser al menos 1000')
    .max(16500, 'El monto asegurado no puede ser mayor a 1,000,000'),
});

export const useChooseVehicle = () => {

  const [initialValues, setInitialValues] = useState<ChooseVehicle>({
    year: '',
    brand: '',
    availableGas: false,
    totalAmountInsured: 14300,
  });

  const setInitData = useInitStore(state => state.setInitData);
  const dataVehicle = useInitStore(state => state.vehicle);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schemaValidation)
  });

  const onSubmit = async (dataChooseVehicle: ChooseVehicle) => {
    try {
      setIsLoading(true);
      setInitData({
        ...dataVehicle,
        car: dataChooseVehicle
      });
      setIsLoading(false);
      navigate('/vehicle-coverage');
    } catch (error: any) {
      setIsLoading(false);
    }
  }

  return {
    form,
    setInitialValues,
    onSubmit,
    isLoading,
  }

};
