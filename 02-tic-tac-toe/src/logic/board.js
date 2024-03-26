import { WINNER_COMBOS } from "../Constants"

export const checkWinnerFrom = (boardToCheck) => {
    // Agarramos cada combo ganador
    for(const combo of WINNER_COMBOS) {
      // Desempaquetamos
      const [a, b, c] = combo
      // Elemento que se recibe del square
      if(boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]) {
        // Return del ganador
        return boardToCheck[a] 
      }
    }
    // Return si no hay ganador
    return null
}

  // funcion para finalizar el juego en empate
export const checkEndGame = (newBoard) => {
    // ver si hay empate
    // si no hay espacios vacios en el tablero

    return newBoard.every((square) => square !== null)
}