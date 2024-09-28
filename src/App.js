import './App.css';
import styles from './styles/App.module.css'
import Header from './components/Header';
import { useState } from 'react';
import Landing from './components/Landing';
import Filter from './components/Filter';

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Filter setActiveFilter={setActiveFilter}/>
    </div>
  );
}

export default App;
