import React, { useEffect, useState } from 'react';
import '../css/hangman.css';

const App = () => {
  const words = ["casa", "codigo", "ordenador", "lampara", "mesa", "perro"];
  const [selectedWord, setSelectedWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedWord, setGuessedWord] = useState(Array(selectedWord.length).fill("_"));
  const [wrongLetters, setWrongLetters] = useState([]);
  const [attempts, setAttempts] = useState(5);

  useEffect(() => {
    displayWord();
    displayHangman();
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedWord, guessedWord, wrongLetters, attempts]);

  const displayWord = () => {
    document.getElementById("palabra").textContent = guessedWord.join(" ");
  };

  const displayHangman = () => {
    document.getElementById("Ahorcado").style.backgroundImage = `url('imagenes/hangman.png')`;
  };

  const displayWrongLetters = () => {
    document.getElementById("letras_dichas").textContent = `Letras incorrectas: ${wrongLetters.join(", ")}`;
  };

  const checkWin = () => {
    if (!guessedWord.includes("_")) {
      document.getElementById("mensaje").textContent = "¡Ganaste!";
      document.getElementById("mensaje").style.color = "green";
      document.removeEventListener("keydown", handleKeyPress);
    }
  };

  const checkLoss = () => {
    if (attempts === 0) {
      document.getElementById("mensaje").textContent = `Perdiste. La palabra era "${selectedWord}".`;
      document.getElementById("mensaje").style.color = "red";
      document.removeEventListener("keydown", handleKeyPress);
    }
  };

  const handleKeyPress = (event) => {
    const letter = event.key.toLowerCase();

    if (/^[a-z]$/.test(letter)) {
      if (selectedWord.includes(letter)) {
        selectedWord.split("").forEach((char, index) => {
          if (char === letter) {
            guessedWord[index] = letter;
          }
        });
        displayWord();
        checkWin();
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters([...wrongLetters, letter]);
          setAttempts(attempts - 1);
          displayHangman();
          displayWrongLetters();
          checkLoss();
        }
      }
    }
  };

  return (
    <div className="App">
      <div id="inicial">
        <div id="palabra"></div>
        <div id="Ahorcado"></div>
        <div id="letras_dichas"></div>
        <p id="mensaje"></p>
      </div>
    </div>
  );
};

export default App;