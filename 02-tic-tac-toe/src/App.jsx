import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS, WINNER_COMBOS } from './Constants.js'
import { checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { checkEndGame } from './logic/board'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  
  // null sin ganador, false es empate
  const [winner, setWinner] = useState(null)


  // uncion para resetear el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }



  const updateBoard = (index) => {
    // Logica de no Actualizacion, esto hace que si hay algo en el elemento
    // Cuando se ejecute la funcion introduzca un earlyreturn
    if (board[index] || winner) return
    // Logica de actualizacion del tablero
    const newBoard = [...board]
    newBoard[index] = turn // X u O
    setBoard(newBoard)
    // Logica del cambio de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner((prevWinner) => {
        console.log(`Ganador: ${newWinner}, EL ANTERIOR ERA ${prevWinner}`)
        return newWinner
        // todo check if game end
      })
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      
      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App
