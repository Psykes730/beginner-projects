const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const timeEl = document.querySelector('.timer');
const alertEl = document.querySelector('.alert');


let interval;
let timeLeft = 10;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formatedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeEl.innerHTML = formatedTime;
};

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--
        updateTimer();
        if(timeLeft === 0){
            alertEl.innerHTML = 'Time is up!!';
            timeLeft = 5;
            stopTimer();
        }
    }, 1000);
    
}
function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1800;
    updateTimer();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);