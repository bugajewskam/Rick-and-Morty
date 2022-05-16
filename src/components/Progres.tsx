import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Progres() {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center", marginTop:"200px"}}>
      <CircularProgress size={50} />
    </Box>
  );
}