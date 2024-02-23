// Importa Link desde react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/home.css';

function Home() {
  return (
    <div className="container">
      <h1>Bienvenidos a los Juegos Retro</h1>
      <h2>Elige un juego para empezar:</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>Juegos</button>
            </Link>
          </li>
          <li>
            {/* Enlaza el botón a la página de Snake */}
            <Link to="/snake">
              <button>Jugar Snake</button>
            </Link>
          </li>
          <li>
            {/* Enlaza el botón a la página de Ahorcado */}
            <Link to="/hangman">
              <button>Jugar Ahorcado</button>
            </Link>
          </li>
          <li>
            {/* Enlaza el botón a la página de Tres en Raya */}
            <Link to="/tictactoe">
              <button>Jugar Tres en Raya</button>
            </Link>
          </li>
          <li>
            {/* Enlaza el botón a la página de contacto */}
            <Link to="/contacto">
              <button>Contacto</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;