import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import BusinessList from './components/BusinessList';
import Search from './components/Search';

function App() {

    const [businesses, setBusinesses] = useState([])

  return (
    <div className="App">
        <header style={{backgroundColor: 'gold', width: '100%', height: '4rem', display: 'flex',
            justifyContent: 'center', alignItems: 'center'}}>
            <h1>ravenous</h1>
        </header>
        <Search setBusinesses={setBusinesses}/>
        <BusinessList Businesses={businesses}/>
    </div>
  );
}

export default App;
