export const saveGame = ({ board, turn }) => {
    // Guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}

export const resetGameStorage = () => {
    // Eliminar datos de Board y Turn
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}