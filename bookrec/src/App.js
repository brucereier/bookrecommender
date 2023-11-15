import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Header'
import Main from './Main';
import About from './About';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eb7734',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
