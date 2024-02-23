// Importa React y useState desde React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importa los estilos específicos del componente TicTacToe
import '../css/TicTacToe.css';

// Componente principal TicTacToe
const TicTacToe = () => {
  // Estado para mantener el estado del tablero
  const [tablero, setTablero] = useState(Array(9).fill(null));

  // Estado para seguir el turno actual (true para 'X', false para 'O')
  const [turnoX, setTurnoX] = useState(true);

  // Función para calcular si hay un ganador
  const calcularGanador = () => {
    const lineasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lineasGanadoras.length; i++) {
      const [a, b, c] = lineasGanadoras[i];
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        return lineasGanadoras[i]; // Devolvemos las casillas ganadoras en lugar del símbolo ganador
      }
    }

    return null;
  };

  // Maneja el clic en una casilla del tablero
  const handleClick = (index) => {
    if (tablero[index] || calcularGanador()) {
      return; // Evitar clics adicionales si la casilla ya está marcada o si hay un ganador
    }

    // Actualizar el estado del tablero con el nuevo movimiento
    const nuevoTablero = tablero.slice();
    nuevoTablero[index] = turnoX ? 'X' : 'O';
    setTablero(nuevoTablero);

    // Cambiar el turno al siguiente jugador
    setTurnoX(!turnoX);
  };

  // Obtener las casillas ganadoras
  const casillasGanadoras = calcularGanador();

  // Renderizar el componente
  return (
    <div className="contenedor">
      <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
      <h1>Tres en Raya</h1>
      {/* Contenedor del tablero */}
      <div className="tablero">
        {tablero.map((casilla, index) => (
          // Cada casilla en el tablero, con un evento onClick
          <div
            key={index}
            // Se aplica la clase 'ganadora' a las casillas ganadoras
            className={`casilla ${casillasGanadoras && casillasGanadoras.includes(index) ? 'ganadora' : ''}`}
            onClick={() => handleClick(index)}
          >
            {casilla}
          </div>
        ))}
      </div>
      {/* Sección de estado del juego */}
      <div className="estado">
        {/* Mostrar el ganador si hay uno */}
        {casillasGanadoras ? (
          <p>¡Ganador: {tablero[casillasGanadoras[0]]}!</p>
        ) : tablero.every((casilla) => casilla) ? (
          // Mostrar empate si todas las casillas están ocupadas
          <p>¡Empate!</p>
        ) : (
          // Mostrar el turno del jugador actual si el juego aún no ha terminado
          <p>Turno de: {turnoX ? 'X' : 'O'}</p>
        )}
        {/* Botón para reiniciar el juego */}
        <button onClick={() => setTablero(Array(9).fill(null))}>Reiniciar</button>
      </div>
    </div>
  );
};

// Exportar el componente TicTacToe
export default TicTacToe;
