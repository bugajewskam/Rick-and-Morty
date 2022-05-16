import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularProgres() {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center", marginTop:"200px"}}>
      <CircularProgress size={50} />
    </Box>
  );
}