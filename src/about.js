import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/about.css";
import snake from './img/juegos/snake.png';
import tictac from './img/juegos/tictac.png';
import tetris from './img/juegos/tetris.png';
import pacman from './img/juegos/pacman.png';
import mario from './img/juegos/mario.png'
import adivina from './img/juegos/adivina.png'

const About = () => {
  return (
    <div className="about-container">
      <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
      <h1>Juegos Retro</h1>

      <Row xs={1} md={4} className="g-4">
        <Col>
        <Link to="/Snake" style={{ textDecoration: 'none' }}>
          <Card>
            <Card.Img variant="top" src={snake}/>
            
            <Card.Body>
              <Card.Title>
                <Link to="/Snake" style={{ textDecoration: 'none' }}>Snake</Link></Card.Title>
              <Card.Text className="card-text">
              <p>El jugador controla una serpiente que vaga alrededor de un plano delimitado,
              recogiendo alimentos y evitando golpearse contra su propia cola. Cada vez que la serpiente come la cola crece,
              aumentando la dificultad del juego.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col>

         <Link to="/TicTacToe" style={{ textDecoration: 'none' }}>
          <Card>
            <Card.Img variant="top" src={tictac} />
            <Card.Body>
              <Card.Title>Tres en raya</Card.Title>
              <Card.Text className="card-text">
              El juego del gato o tres en raya es un juego de lápiz y papel para dos jugadores, X y O, que marcan las casillas de un cuadrado de 3×3. El jugador que consiga colocar tres de sus símbolos en línea horizontal, vertical o diagonal gana el juego.
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        

        <Col>
        <Link to="/Hangman" style={{ textDecoration: 'none' }}>
          <Card>
            <Card.Img variant="top" src={adivina} />
            <Card.Body>
              <Card.Title>Ahorcado</Card.Title>
              <Card.Text className="card-text">
              Adivinar una palabra en el menor número de intentos posibles. Primero se deben marcar tantas rayas como letras tenga la palabra pensada. Los jugadores tendrán que ir diciendo letras para formar la palabra. Se dibuja una horca y los jugadores van diciendo letras.              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={tetris} />
            <Card.Body>
              <Card.Title>Tetris</Card.Title>
              <Card.Text className="card-text">
              El juego consiste en colocar piezas de diferentes formas que caen desde la parte superior de la pantalla, formando filas sin huecos. Cada vez que se forma una fila, desaparece y las piezas que están encima de ella descienden una posición. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={pacman} />
            <Card.Body>
              <Card.Title>Pacman</Card.Title>
              <Card.Text className="card-text">
              El objetivo del personaje es comer todos los puntos de la pantalla, 
            momento en el que se pasa al siguiente nivel. 
            Sin embargo, cuatro fantasmas, Shadow (Blinky), Speedy (Pinky), 
            Bashful (Inky) y Pokey (Clyde), recorren el laberinto para intentar capturar a Pac-Man.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={mario} />
            <Card.Body>
              <Card.Title>Mario Bros</Card.Title>
              <Card.Text className="card-text">
              Mario Bros es un videojuego de plataformas desarrollado y publicado por Nintendo.
              Fue lanzado originalmente en Japón en 1985 para la Famicom y posteriormente en 1985 para la NES en América del Norte y Europa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
  </Row>

    </div>
  );
};

export default About;