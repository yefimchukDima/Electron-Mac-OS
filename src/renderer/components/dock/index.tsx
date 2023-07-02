import React from 'react';
import { Grid, Box } from '@mui/material';
import terminal from '../../../../assets/terminal.png';

export default function Dock() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '57px' }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '16px',
          border: '1px solid rgba(194,194,194,0.3)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255,255,255,0.27)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
          gap={1}
        >
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
          <img
            src={terminal}
            alt="Terminal"
            style={{ borderRadius: '15px', height: '48px', width: '48px' }}
          />
       
        </Box>
      </Box>
    </Grid>
  );
}
