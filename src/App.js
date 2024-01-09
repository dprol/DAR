import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';
import About from './about';
import Snake from './componentes/Snake';
import Hangman from './componentes/Hangman';
import TicTacToe from './componentes/TicTacToe';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={ <About /> } />
        <Route path="/snake" element={<Snake />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
