import { Checkbox } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface FieldProps {
  name: string;
  [key: string]: any;
}

const CheckBoxField: React.FC<FieldProps> = (props) => {

  const {
    name
  } = props;

  const {
    setValue,
    clearErrors,
  } = useFormContext();

  return (
    <>
      <Checkbox
        color="success"
        onChange={(e) => {
          clearErrors(name);
          setValue(name, e.target.checked);
        }}
      />
    </>
  )
}

export default CheckBoxField;
