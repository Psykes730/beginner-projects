const questions = [
    {
        question: 'Who was the first black president of South Africa?',
        answers: [
            { text:'Jacob Zuma', correct: false },
            { text:'Cyril Ramaphosa', correct: false },
            { text:'Nelson Mandela', correct: true },
            { text:'Angie Motshekga', correct: false },
            { text:'Julius Malema', correct: false },
        ]
    },
    {
        question: 'Whichnis the fastest land animal?',
        answers: [
            { text:'Cheetah', correct: true },
            { text:'Lion', correct: false },
            { text:'Elephant', correct: false },
            { text:'Rabbit', correct: false },
        ] 
    },
    {
        question: 'Whic is the tallest land animal?',
        answers: [
            { text:'Elepant', correct: false },
            { text:'Rhino', correct: false },
            { text:'Eagle', correct: false },
            { text:'Giraffe', correct: true },
        ] 
    },
    {
        question: 'In which province is Mthatha located',
        answers: [
            { text:'Gauteng', correct: false },
            { text:'Eastern Cape', correct: true },
            { text:'Limpopo', correct: false },
            { text:'Mpumalanga', correct: false },
        ]
    }
];

const questionEl = document.querySelector('#question');
const answerEl = document.querySelector('#answer-btns');
const nextBtn = document.querySelector('#next-btn');

let currentQuestIdx = 0;
let score = 0

function startQuiz(){
    currentQuestIdx = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuiz();
};

function showQuiz(){
    resetState();
    let currentQuestion = questions[currentQuestIdx];
    let questionNo = currentQuestIdx + 1;
    questionEl.innerHTML= questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerEl.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score ++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerEl.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true"
    });
    nextBtn.style.display = "block"
}

function showScore(){
    resetState();
    questionEl.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block"
}

function handleNextBtn(){
    currentQuestIdx++;
    if(currentQuestIdx < questions.length){
        showQuiz();
    } else{
        showScore();
    }
};
nextBtn.addEventListener('click', ()=>{
    if(currentQuestIdx < questions.length){
        handleNextBtn();
    } else{
        startQuiz();
    }
})
startQuiz();