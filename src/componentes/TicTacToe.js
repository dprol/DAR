import React, { useState } from 'react';
import '../css/TicTacToe.css';

const TresEnRaya = () => {
  const [turno, setTurno] = useState('X');
  const [juegoActivo, setJuegoActivo] = useState(true);
  const [casillas, setCasillas] = useState(Array(9).fill(''));

  const lineasGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]              // Diagonales
  ];

  const manejarClic = (indice) => {
    if (!juegoActivo || casillas[indice] !== '') return;

    const nuevasCasillas = [...casillas];
    nuevasCasillas[indice] = turno;

    setCasillas(nuevasCasillas);

    if (hayGanador()) {
      alert(`¡El jugador ${turno} ha ganado!`);
      setJuegoActivo(false);
    } else if (tableroLleno()) {
      alert('¡Empate! El juego ha terminado sin ganadores.');
      setJuegoActivo(false);
    } else {
      setTurno(turno === 'X' ? 'O' : 'X');
    }
  };

  const hayGanador = () => {
    for (const linea of lineasGanadoras) {
      const [a, b, c] = linea;
      if (casillas[a] !== '' &&
          casillas[a] === casillas[b] &&
          casillas[a] === casillas[c]) {
        return true;
      }
    }
    return false;
  };

  const tableroLleno = () => {
    return casillas.every(casilla => casilla !== '');
  };

  const reiniciarJuego = () => {
    setJuegoActivo(true);
    setTurno('X');
    setCasillas(Array(9).fill(''));
  };

  return (
    <div className="contenedor">
      <h1>Tres en Raya</h1>

      <div id="tablero" className="tablero">
        {casillas.map((valor, indice) => (
          <div
            key={indice}
            className="casilla"
            onClick={() => manejarClic(indice)}
          >
            {valor}
          </div>
        ))}
      </div>

      <button className="boton" onClick={reiniciarJuego}>Reiniciar Juego</button>
    </div>
  );
};

export default TresEnRaya;