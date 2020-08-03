import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Income from './components/Income';
import Transctionlist from './components/Transctionlist';
import Addtranction from './components/Addtranction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <Income />
      <Transctionlist />
      <Addtranction />

    </GlobalProvider >
  )
}

export default App;