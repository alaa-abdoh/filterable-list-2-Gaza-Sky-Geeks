import './App.css';
import styles from './styles/App.module.css'
import Header from './components/Header';
import { useState } from 'react';
import Landing from './components/Landing';

function App() {

  return (
    <div className="App">
      <Header/>
      <Landing/>
    </div>
  );
}

export default App;
