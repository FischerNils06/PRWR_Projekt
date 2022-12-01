const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questioncontainerElement = document .getElementById('questioncontainerquiz')
const questionElement = document.getElementById('questiona')
const answerButtonElements = document.getElementById('answerbuttonsa')

let shuffledQuestions, currentQuestinIndex

startButton .addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestinIndex++
    setNextQuestion()
})

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => 1)
currentQuestinIndex = 0
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
    }
    button.addEventListener('click' , selectAnswer)
    answerButtonElements.appendChild(button)
    
})
}

function resetState() {
    nextButton.classList.add('hide')
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

    nextButton.classList.remove('hide')

    if (shuffledQuestions.lenght > currentQuestinIndex + 1) {
        nextbutton.classList.remove('hide')
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    

}  

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
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
        question: 'Woher kommt Nintendo',
        answers: [
            { text: 'Tokio',correct: false},
            { text:'Osaka',correct: false},
            { text: 'Kyoto',correct: true},
            { text: 'Nagoya',correct:false}
        ]
    }


 
  
]