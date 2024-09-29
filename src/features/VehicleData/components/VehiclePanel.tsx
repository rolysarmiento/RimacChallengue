import { Grid, useTheme } from "@mui/material";
import ChooseVehicle from "./ChooseVehicle";
import SearchVehicle from "./SearchVehicle";

const VehiclePanel = () => {
  const theme = useTheme();

  return (
    <Grid item md={9} xs={12}>
      <Grid 
        container
        sx={{
          paddingTop: {
            xs: 10,
            md: theme.spacing(12)
          },
          paddingLeft: {
            xs: 5,
            md: theme.spacing(12)
          }
        }}
      >
        <Grid item md={6} xs={12}>
          <ChooseVehicle />
        </Grid>
        <Grid item md={6} xs={12}>
          <SearchVehicle />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VehiclePanel;
