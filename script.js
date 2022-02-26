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
    const click= e=>{
        if(e.target.textContent == ''){
            e.target.innerText = currentPlayer.marker;
            switchPlayer(currentPlayer);
        }else{

        }
        
    }
    const displayGrid = () => { 
        for(let i=0;i < grid.length; i++){
            let cell= document.createElement('div');
            cell.classList.add('game-cell');
            cell.textContent = grid[i];
            cell.onclick = click;
            gameGrid.append(cell);
        }
    }
    console.log(player1);
    return{
        displayGrid,
    };
})();

game.displayGrid();
console.log(typeof(game));