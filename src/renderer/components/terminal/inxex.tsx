import React from 'react';
import { Grid } from '@mui/material';

export default function Terminal() {
  return (
    <Grid
      container
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '500px',
        width: '600px',
        borderRadius: '10px',
        backgroundColor: 'black',
      }}
    >
      <Grid
        container
        sx={{ borderRadius: '10px 10px 0 0', backgroundColor: 'white' }}
      >
        adad
      </Grid>
      <Grid container>dddd</Grid>
    </Grid>
  );
}
