import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@mui/material/styles'; // Importe o ThemeProvider do Material-UI
import { App } from './App';
import reportWebVitals from './reportWebVitals';

// Importe ou defina o tema que você deseja usar
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  // Defina as propriedades do seu tema aqui
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
