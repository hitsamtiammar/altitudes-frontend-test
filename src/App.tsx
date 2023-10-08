import React from 'react';
import styles from './App.module.css';
import MyAppBar from './layout/MyAppBar';
import { Container } from '@mui/material';
import Home from './pages/Home';

function App() {
  return (
    <div className={styles.App}>
      <MyAppBar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
