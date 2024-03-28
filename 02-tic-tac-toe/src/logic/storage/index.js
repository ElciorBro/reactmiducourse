export const saveGame = ({ board, turn }) => {
    // Guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    // Eliminar datos de Board y Turn
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}