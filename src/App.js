// En tu archivo App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';
import About from './about';
import Snake from './componentes/Snake';
import Hangman from './componentes/Hangman';
import TicTacToe from './componentes/TicTacToe';
import Contacto from './componentes/Contacto';
import './App.css';

const imagenes = require.context('./imagenes', true);

function displayHangman() {
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About imagenes={imagenes} />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/hangman" element={<Hangman imagenes={imagenes} displayHangman={displayHangman} />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
