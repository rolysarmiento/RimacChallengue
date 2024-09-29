import React from 'react';
// import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";
// import HistoryProgress from '../VehicleData/components/HistoryProgress';
// import end from '../../assets/images/IMG2END.png'
// import end2 from '../../assets/images/imgend.png'

// export default function VehicleCoveragePage() {

//   const isSmallScreen = useMediaQuery('(max-width:600px)');

//   return (
//     <div>

//       {isSmallScreen ? (
//         <>
//         <img src={end} alt="" />
//         </>
//       ) : (
//         <>
//           <img src={end2} alt="" />
//         </>
//       )}

//     </div>
//   )
// }


import { Grid } from "@mui/material";
// import HistoryProgress from "./components/HistoryProgress";
import HistoryProgress from "../VehicleData/components/HistoryProgress.tsx";

const VehicleCoveragePage = () => (
  <Grid container>
    <HistoryProgress />
    {/* <VehiclePanel /> */}
  </Grid>
);

export default VehicleCoveragePage;
