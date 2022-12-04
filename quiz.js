const startButton = document.getElementById('start-btn')
const questioncontainerElement = document.getElementById('questioncontainerquiz')
const questionElement = document.getElementById('question')
const answerButtonElements = document.getElementById('answerbuttons')
let score2 = 0;
let shuffledQuestions, currentQuestinIndex

startButton.addEventListener('click', startGame)
answerButtonElements.addEventListener('click', () =>{
    currentQuestinIndex += 1;
    setTimeout(setNextQuestion, 1000)

})

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestinIndex = 0
score2 = 0;
questioncontainerElement .classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestinIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn2')
    if (answer.correct) {
        button.dataset.correct = answer.correct
        button.classList.add('correct-btn')
       
    }
    button.addEventListener('click' , selectAnswer)
    answerButtonElements.appendChild(button)
    
})
}

function resetState() {
    
    clearStatusClass(document.body)
    while (answerButtonElements.firstChild) {
        answerButtonElements.removeChild
        (answerButtonElements.firstChild)
        
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonElements.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
})

    
    // if it is the last question, then show the score
    
    
    if (shuffledQuestions.lenght < currentQuestinIndex + 1) {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        questionElement.innerText = questions.question
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        let score3 = score2 - currentQuestinIndex -1;
        questionElement.innerText = 'Dein Score ist ' + score3 + ' von ' + questions.length;
        
        
    }
    

}  

function setStatusClass(element, correct) {
    
    clearStatusClass(element)
        
    
    if (correct) {
        element.classList.add('correct')
        score2 += 1;

    } else{
        element.classList.add('wrong')
    }
    
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



const questions = [
    {
        question: 'Was heisst Nintendo?',
        answers: [
            { text: 'Lege das Glück in die Hände des Himmels',correct: true},
            { text:'Es ist der Name des Erfiners',correct: false},
            { text: 'Das Glück liegt in deiner Hand',correct: false},
            { text: 'Dort wo die Sonne aufgeht',correct:false}

        ]
   
    }, {
        question: 'Von welcher Stadt kommt Nintendo',
        answers: [
            { text: 'Tokio',correct: false},
            { text:'Osaka',correct: false},
            { text: 'Kyoto',correct: true},
            { text: 'Nagoya',correct:false}
        ]
    }, {
        question: 'Wie viele Mitarbeiter hat Nintendo?',
        answers: [
            { text: '1000',correct: false},
            { text:'2000',correct: false},
            { text: '3000',correct: false},
            { text: '4000',correct:true}
        ]
    }, {
        question: 'Wie viele Spiele hat Nintendo entwickelt?',
        answers: [
            { text: '100',correct: false},
            { text:'200',correct: false},
            { text: '300',correct: true},
            { text: '400',correct:false}
        ]
    }


 
  
];
