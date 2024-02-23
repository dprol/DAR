import React, { useState, useEffect } from 'react';
import '../css/hangman.css';
import { Link } from 'react-router-dom';

const App = () => {
  const initialWords = ["casa", "codigo", "ordenador", "lampara", "mesa", "perro"];
  const [selectedWord, setSelectedWord] = useState(initialWords[Math.floor(Math.random() * initialWords.length)]);
  const [guessedWord, setGuessedWord] = useState(Array(selectedWord.length).fill("_"));
  const [wrongLetters, setWrongLetters] = useState([]);
  const [attempts, setAttempts] = useState(5);
  const [message, setMessage] = useState('');

  const resetGame = () => {
    // Seleccionar una nueva palabra al azar
    const newSelectedWord = initialWords[Math.floor(Math.random() * initialWords.length)];
    setSelectedWord(newSelectedWord);

    // Reiniciar las variables de estado
    setGuessedWord(Array(newSelectedWord.length).fill("_"));
    setWrongLetters([]);
    setAttempts(5);
    setMessage('');

    // Agregar nuevamente el evento keydown
    document.addEventListener("keydown", handleKeyPress);
  };

  const displayWord = () => {
    return guessedWord.join(" ");
  };

  const displayHangman = () => {
    return `url('imagenes/hangman_${attempts}.png')`;
  };

  const displayWrongLetters = () => {
    return `Letras incorrectas: ${wrongLetters.join(", ")}`;
  };

  const checkWin = (newGuessedWord) => {
    if (!newGuessedWord.includes("_")) {
      setMessage("¡Ganaste!");
      document.removeEventListener("keydown", handleKeyPress);
    }
  };

  const checkLoss = () => {
    if (attempts === 0) {
      setMessage(`Perdiste. La palabra era "${selectedWord}".`);
      document.removeEventListener("keydown", handleKeyPress);
    }
  };

  const handleKeyPress = (event) => {
    const letter = event.key.toLowerCase();

    if (/^[a-z]$/.test(letter)) {
      if (selectedWord.includes(letter)) {
        const newGuessedWord = guessedWord.map((char, index) => (selectedWord[index] === letter ? letter : char));
        setGuessedWord(newGuessedWord);
        checkWin(newGuessedWord);
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters([...wrongLetters, letter]);
          setAttempts(attempts - 1);
          checkLoss();
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [guessedWord, wrongLetters, attempts]);

  return (
    <div className="App">
      <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
      <div id="inicial">
        <div id="palabra">
          <span>{displayWord()}</span>
        </div>
        <div id="Ahorcado" style={{ backgroundImage: displayHangman() }}></div>
        <div id="letras_dichas">
          <p>{displayWrongLetters()}</p>
        </div>
        <p id="mensaje" style={{ color: message.includes("Ganaste") ? 'green' : 'red' }}>{message}</p>
        
        <button onClick={resetGame}>Reiniciar Juego</button>
      </div>
    </div>
  );
};

export default App;