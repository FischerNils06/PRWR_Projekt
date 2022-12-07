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
shuffle(question.answers)
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
        question: 'Welche dieser Konsolen hat sich am schlechtesten verkauft?',
        answers: [
            { text: 'Gamecube',correct: false},
            { text:'Virtual Boy',correct: true},
            { text: 'Wii U',correct: false},
            { text: 'Switch',correct:false}
        ]
    }, {
        question: 'Welche dieser Konsolen hat sich am besten verkauft?',
        answers: [
            { text: 'Wii',correct: false},
            { text:'DS',correct: true},
            { text: '3DS',correct: false},
            { text: 'Gameboy',correct:false}
        ]
    }, {
        question: 'Wer hat das Patent für die "Motion Steuerung" der Nintendo Wii original Angelegt?',
        answers: [
            { text: 'Tom Quinn',correct: true},
            { text:'Shigeru Miamoto ',correct: false},
            { text: 'Scott Daniel Wozniak',correct: false},
            { text: 'Reggie Fils-Aimé',correct:false}
        ]
    }, {
        question: 'Welche Firma war Nintendos grösster Konkurent, als sie die SNES rausbrachten?',
        answers: [
            { text: 'Microsoft',correct: false},
            { text:'Sony',correct: false},
            { text: 'Sega',correct: true},
            { text: 'Atari',correct:false}
        ]
    }, {
        question: 'Wie viele Spiele gibt es für den Virtual Boy?',
        answers: [
            { text: '22',correct: true},
            { text:'73',correct: false},
            { text: '252',correct: false},
            { text: 'ca. 500',correct:false}
        ]

    }, {
        question: 'Wie hies der NES in Japan?',
        answers: [
            { text: 'Nintendo Game System',correct: false},
            { text:'Totenoshi',correct: false},
            { text: 'FamiCom',correct: true},
            { text: 'GameTime',correct:false}
        ]
    }, {
        question: 'Wofür steht DS?',
        answers: [
            { text: 'Dry Salad',correct: false},
            { text:'Digital System',correct: false},
            { text: 'Dual Shock',correct: false},
            { text: 'Double Screen',correct:true}

        ]
    }, {
        question: 'Wie viele 3DS Versionen gibt es?',
        answers: [
            { text: '1',correct: false},
            { text:'3',correct: false},
            { text: '6',correct: true},
            { text: '8',correct:false}
        ]
    }, {
        question: 'Als was wurde der NES in den USA vermarktet?',
        answers: [
            { text: 'Heimkonsole',correct: false},
            { text:'Computer',correct: false},
            { text: 'Spielzeug',correct: true},
            { text: 'Dekoration',correct:false}
        ]
    }, {
        question: 'Wer hat Nintendo in richtung Videospiele Gesteuert?',
        answers: [
            { text: 'Gunpei Yokoi',correct: true},
            { text:'Shigeru Miamoto',correct: false},
            { text: 'Reggie Fils-Aimé',correct: false},
            { text: 'Satoru Iwata',correct:false}
    
        ]
    }

];



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
   
    while (currentIndex != 0) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
     
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }