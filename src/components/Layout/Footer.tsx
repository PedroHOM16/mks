import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        padding: '20px',
        marginTop: '20px',
      }}
    >
      <Typography variant="body2" color="textSecondary">
      {new Date().getFullYear()} MKS sistemas © Todos os direitos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
