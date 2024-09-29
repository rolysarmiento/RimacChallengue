import { Grid } from "@mui/material";
import HistoryProgress from "./components/HistoryProgress";
import VehiclePanel from "./components/VehiclePanel";

const VehicleDataPage = () => (
  <Grid container>
    <HistoryProgress />
    <VehiclePanel />
  </Grid>
);

export default VehicleDataPage;
