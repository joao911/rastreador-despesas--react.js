import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance'
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <div className="container">
      <Balance/>
    </div>
    </>
  );
}

export default App;
