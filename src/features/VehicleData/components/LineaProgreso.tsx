import React from 'react';
import Grid from '@mui/material/Grid';
import styles from '../VehicleDataPage.module.scss';

// import IconReturn from '../../../components/IconReturn/IconReturn.jsx';
// import IconNumber from '../../../components/IconNumber/IconNumber.jsx';

import { useMediaQuery } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

export default function LineaProgreso() {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Grid item md={4} xs={12} className={styles.ctn_container}>
      <div className={styles.ctn__description}>
        {isSmallScreen ? (
          <>
            <div className={styles.progres}>
              {/* <IconReturn /> */}
              <span>PASO 1 DE 2</span>
              <BorderLinearProgress variant="determinate" value={25} style={{ width: '125px' }} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.progres}>
              <div className={styles.progres__icon}>
                {/* <IconNumber Num={1} selected={'True'} /> */}
              </div>
              <div className={styles.progres__text}>
                <span> Datos del Auto </span>
              </div>
            </div>

            <div className={styles.progres}>
              <div className={styles.progres__icon}>
                {/* <IconNumber Num={2} selected={'False'} /> */}
              </div>
              <div className={styles.progres__text}>
                <span> Arma tu plan </span>
              </div>
            </div>
          </>
        )}
      </div>
    </Grid>
  )
}
