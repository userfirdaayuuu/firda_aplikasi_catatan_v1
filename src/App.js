import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import FirstPage from './pages/FirstPages';
import SecondPages from './pages/SecondPages';

function App() {
  return (
    <div className='notes-app'>
      <header className='notes-app_header'>
        {/* <h1>Memochou</h1> */}
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/second' element={<SecondPages />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
