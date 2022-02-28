const gameGrid = document.getElementById('gameGrid');
const result = document.getElementById('results');
const resetButton = document.getElementById('reset')
const Player =(marker, name)=>{
    return{marker, name};
}
const game =(()=>{
    let grid =['','','','','','','','',''];
    const player1 = Player('x','Player1');
    const player2 = Player('o','Player2');
    let currentPlayer = player1;
    let isGameOver = false;
    const winingCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    const switchPlayer = (player)=>{
        if(player ==player1){
            currentPlayer = player2;
        }else{
            currentPlayer = player1;
        }
    }
    const checkwin =()=>{
        let currentGrid = Array.from(document.querySelectorAll('[data-index]'));
        return winingCombinations.some(item=>{
            return item.every(index=>{
                return currentGrid[index].innerText == currentPlayer.marker;
            })
        })
    }
    const click= e=>{
        if(!isGameOver){
            if(e.target.textContent == ''){
                e.target.innerText = currentPlayer.marker; 
                if(checkwin()){
                    result.innerText=currentPlayer.name +' won';
                    isGameOver=true;
                };
                console.log(checkDraw());
                if(checkDraw()){
                    result.innerText="Draw";
                    isGameOver=true;
                }
                switchPlayer(currentPlayer);
            }   
        }else{

        }
       
    }
    const checkDraw =()=>{
        let currentGrid = Array.from(document.querySelectorAll('[data-index]'));
        console.log(currentGrid);
        return currentGrid.every(item=>{
            return item.textContent == 'x' || item.textContent == 'o';
        })
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
    resetButton.addEventListener('click',()=>{
        isGameOver=false;
        resetGrid();
        displayGrid();
        result.textContent="\u00A0"
    });
    return{ displayGrid, resetGrid};
})();

game.displayGrid();
