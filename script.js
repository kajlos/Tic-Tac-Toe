const gameGrid = document.getElementById('gameGrid');
const Player =(marker)=>{
    return{marker};
}
const game =(()=>{
    let grid =['','','','','','','','',''];
    const player1 = Player('x');
    const player2 = Player('o');
    let currentPlayer = player1;
    const switchPlayer = (player)=>{
        if(player ==player1){
            currentPlayer = player2;
        }else{
            currentPlayer = player1;
        }
    }
    const checkwin =(e)=>{
        let currentGrid = Array.from(document.querySelectorAll('[data-index]'));
        console.log(currentGrid);
        console.log(e);
    }
    const click= e=>{
        if(e.target.textContent == ''){
            checkwin(e);
            e.target.innerText = currentPlayer.marker;
            switchPlayer(currentPlayer);
        }
    }
    const displayGrid = () => { 
        for(let i=0;i < grid.length; i++){
            let cell= document.createElement('div');
            cell.classList.add('game-cell');
            cell.dataset.index=i;
            cell.textContent = grid[i];
            cell.onclick = click;
            gameGrid.append(cell);
        }
    }
    const resetGrid = ()=>{
        while(gameGrid.firstChild){
            gameGrid.removeChild(gameGrid.firstChild);
        }
    }
    return{ displayGrid, resetGrid};
})();

game.displayGrid();
