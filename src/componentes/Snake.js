import React, { useState, useEffect, useCallback } from 'react';
import '../css/Snake.css';
import { Link } from 'react-router-dom';

const inicialSnake = [{ x: 2, y: 2 }];
const inicialComida = { x: 5, y: 5 };
const tamañoCuadro = 20;
const tamañoTablero = 30;

function Snake() {
  const [snake, setSnake] = useState(inicialSnake);
  const [comida, setComida] = useState(inicialComida);
  const [direccion, setDireccion] = useState('DERECHA');
  const [velocidad, setVelocidad] = useState(300);
  const [juegoActivo, setJuegoActivo] = useState(true);

  const comprobarColision = cabeza => {
    for (let segmento of snake) {
      if (cabeza.x === segmento.x && cabeza.y === segmento.y) {
        return true;
      }
    }
    return cabeza.x < 0 || cabeza.x >= tamañoTablero || cabeza.y < 0 || cabeza.y >= tamañoTablero;
  };

  const moverSnake = useCallback(() => {
    setSnake(snake => {
      let cabeza = { ...snake[0] };
      switch (direccion) {
        case 'DERECHA': cabeza.x++; break;
        case 'IZQUIERDA': cabeza.x--; break;
        case 'ARRIBA': cabeza.y--; break;
        case 'ABAJO': cabeza.y++; break;
        default: break;
      }

      if (comprobarColision(cabeza)) {
        setJuegoActivo(false);
        return snake;
      }

      let nuevaSnake = [cabeza, ...snake];
      if (cabeza.x === comida.x && cabeza.y === comida.y) {
        let nuevaComida;
        do {
          nuevaComida = {
            x: Math.floor(Math.random() * tamañoTablero),
            y: Math.floor(Math.random() * tamañoTablero)
          };
        } while (comprobarColision(nuevaComida));

        setComida(nuevaComida);
      } else {
        nuevaSnake.pop();
      }

      return nuevaSnake;
    });
  }, [direccion, comida, snake]);

  useEffect(() => {
    const cambiarDireccion = (nuevaDireccion) => {
      setDireccion(actual => {
        if (
          (nuevaDireccion === 'ARRIBA' && actual !== 'ABAJO') ||
          (nuevaDireccion === 'ABAJO' && actual !== 'ARRIBA') ||
          (nuevaDireccion === 'IZQUIERDA' && actual !== 'DERECHA') ||
          (nuevaDireccion === 'DERECHA' && actual !== 'IZQUIERDA')
        ) {
          return nuevaDireccion;
        }
        return actual;
      });
    };

    const handleKeyDown = (e) => {
      switch (e.keyCode) {
        case 37: cambiarDireccion('IZQUIERDA'); break;
        case 38: cambiarDireccion('ARRIBA'); break;
        case 39: cambiarDireccion('DERECHA'); break;
        case 40: cambiarDireccion('ABAJO'); break;
        default: break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    if (juegoActivo) {
      const movimiento = setInterval(moverSnake, velocidad);
      return () => clearInterval(movimiento);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [moverSnake, juegoActivo, velocidad]);


  const reiniciarJuego = () => {
    // Restablecer el estado del juego a su estado inicial
    setSnake(inicialSnake);
    setComida(inicialComida);
    setDireccion('DERECHA');
    setVelocidad(300);
    setJuegoActivo(true);
  };

  return (
    <div>
      <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
      <div className="snake-background"></div>
      <h2>Snake</h2>
      {!juegoActivo && <h3>¡Juego terminado!</h3>}
      <div className="snake-background"></div> {/* Fondo específico para este componente */}

      {/* Encabezado y mensaje de juego terminado (si es necesario) */}
      <h2>Snake</h2>
      {!juegoActivo && <h3>¡Juego terminado!</h3>}

      <button className="reiniciar-btn" onClick={reiniciarJuego}>Reiniciar Juego</button> {/* Botón de reinicio */}

      {/* Tablero del juego */}
      <div 
        className="game-board"
        style={{ 
          width: `${tamañoTablero * tamañoCuadro}px`, 
          height: `${tamañoTablero * tamañoCuadro}px`, 
          margin: '0 auto' // Centra el tablero horizontalmente
        }}
      >
        {/* Renderiza cada segmento de la serpiente */}
        {snake.map((segmento, i) => (
          <div 
            key={i} 
            style={{ 
              position: 'absolute', 
              width: `${tamañoCuadro}px`, 
              height: `${tamañoCuadro}px`, 
              backgroundColor: i === 0 ? 'green' : 'black', 
              left: `${segmento.x * tamañoCuadro}px`, 
              top: `${segmento.y * tamañoCuadro}px`
            }}
          />
        ))}

        {/* Renderiza la comida */}
        <div 
          style={{ 
            position: 'absolute', 
            width: `${tamañoCuadro}px`, 
            height: `${tamañoCuadro}px`, 
            backgroundColor: 'red', 
            left: `${comida.x * tamañoCuadro}px`, 
            top: `${comida.y * tamañoCuadro}px`
          }}
        />
      </div>
    </div>
  );
}
export default Snake;
