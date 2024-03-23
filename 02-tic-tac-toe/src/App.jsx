import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'O'
}


const Square = ( { children, updateBoard, index, isSelected }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  // horizontales
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8],
  // Diagonales
  [0, 4, 8],
  [2, 4, 6],
  // Verticales
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  
  // null sin ganador, false es empate
  const [winner, setWinner] = useState(null)
  const checkWinner = (boardToCheck) => {
    // Agarramos cada combo ganador
    for(const combo of WINNER_COMBOS) {
      // Desempaquetamos
      const [a, b, c] = combo
      // Elemento que se recibe del square
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        // Return del ganador
        return boardToCheck[a]
      }
      // Return si no hay ganador
      return null
    }
  } 

  const updateBoard = (index) => {
    // Logica de no Actualizacion, esto hace que si hay algo en el elemento
    // Cuando se ejecute la funcion introduzca un earlyreturn
    if (board[index]) return
    // Logica de actualizacion del tablero
    const newBoard = [...board]
    newBoard[index] = turn // X u O
    setBoard(newBoard)
    // Logica del cambio de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }


  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
