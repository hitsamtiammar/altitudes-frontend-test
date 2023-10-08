import React from 'react';
import styles from './App.module.css';
import MainNavigation from '@/navigation/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </div>
  );
}

export default App;
