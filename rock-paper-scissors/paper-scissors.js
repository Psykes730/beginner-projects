const rockEl = document.querySelector('.rockbtn');
const paperEl = document.querySelector('.paperbtn');
const scissorsEl = document.querySelector('.scissorsbtn');

rockEl.addEventListener('click', ()=>{
    playGame('rock');
})
paperEl.addEventListener('click', ()=>{
    playGame('paper');
})
scissorsEl.addEventListener('click', ()=>{
    playGame('scissors');
})


function compMove(){
    const randonNum = Math.floor(Math.random() * 3) +1;
    let computerMove = '';

    if(randonNum === 1){
        computerMove = 'rock';
    } else if(randonNum === 2){
        computerMove = 'paper';
    } else if(randonNum === 3){
        computerMove = 'scissors'
    };
    
    return computerMove;
}
    function playGame(playerMove){
        const computerMove = compMove();
        let results = '';

    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            results = 'Tie!'
        } else if(computerMove === 'paper'){
            results = 'You lose!'
        } else if(computerMove === 'scissors'){
            results= 'You win!'
        };
    } else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            results = 'You win!'
        } else if(computerMove === 'paper'){
            results = 'Tie!'
        } else if(computerMove === 'scissors'){
            results='You lose!'
        };
    } else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            results = 'You lose!'
        } else if(computerMove === 'paper'){
            results = 'You win!'
        } else if(computerMove === 'scissors'){
            results='Tie!'
        };
    };

    document.querySelector('.results').innerHTML = results;
    document.querySelector('.player-move').innerHTML = `You picked: <img src="pics/${playerMove}-emoji.png" class="move-icon">`;
    document.querySelector('.comp-move').innerHTML = `Computer picked: <img src="pics/${computerMove}-emoji.png" class="move-icon">`;
};
