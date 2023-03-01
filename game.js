'use strict'
const questionEl = document.getElementById('question')
const choices = Array.from (document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoresText = document.querySelector('#score')
const fullBar = document.querySelector('#progressBarFull')

let currentQuestion = {}
let correctAnswer = true
let score = 0
let questionCounter = 0
let availableQuestion = []

let questions =[
    {question:'What is bidia ',
  choice1:'Man made religion',choice2:'fart',choice3:'Ingnorant',choice4:'none',answer:1},
    
  {question:'Who is Allah ',
  choice1:'someone',choice2:'Mankind',choice3:'The Lord of the universe',choice4:'none',answer:3},
  
  {question:'Who is first man on earth  ',
  choice1:'Adam',choice2:'Jesus',choice3:'Saeton',choice4:'Oduduwa',answer:1},
   
  {question:'which of  this is the name of the  caliphs ',
  choice1:'Uthmon',choice2:'Abubakry',choice3:'Umoru',choice4:'All',answer:4},
  
  {question:'What is the meaning of solat ',
  choice1:'lossFocus',choice2:'Prayer',choice3:'eating',choice4:'fasting',answer:2},
  
  {question:'Tahajud means what?',
  choice1:'middle night prayer',choice2:'fart',choice3:'Ingnorant',choice4:'none',answer:1},
  
  {question:'Who is the best of man kind',
  choice1:'You',choice2:'Imam',choice3:'Prophet Muhammed',choice4:'alfa',answer:3},
   
  {question:'The only Religion before Allah is',
  choice1:'Man made religion',choice2:'nasara',choice3:'ogun worshipper',choice4:'islam',answer:4},
   
  {question:'What are the number of article of faith ',
  choice1:'6',choice2:'12',choice3:'Ingnorant',choice4:'none',answer:1},
  
  {question:'In which month do Muslims perform Hajj',
    choice1:'Robiu l awwal',choice2:'Muharram',choice3:'December',choice4:'DHul l hija',answer:4},
 
    {
      question:'Umu means what',
  choice1:'Sister',choice2:'Mother',choice3:'Uncle',choice4:'Miss',answer:2}
]

const SCORE_POINTS = 100
const MAX_QUESTION = 11

const startGame = function(){
  questionCounter = 0
  score = 0
  availableQuestion = [...questions]
  getNewQuestion()
}
 const getNewQuestion =function ()  {
 if(availableQuestion.length === 0 || questionCounter > MAX_QUESTION){
    localStorage.setItem('mostRecentScore',score)
     
        return window.location.assign ('/end.html') 
    }
questionCounter++
progressText.innerText  = `Question ${questionCounter} of ${MAX_QUESTION}`
fullBar.style.width =` ${(questionCounter/MAX_QUESTION) * 100}%`

const questionIndex = Math.floor(Math.random()* availableQuestion.length)
currentQuestion = availableQuestion[questionIndex]
questionEl.innerText = currentQuestion.question
choices.forEach( choice => {
    const number = choice.dataset['number']
choice.innerText = currentQuestion ['choice' + number]
})
availableQuestion.splice(questionIndex,1)
correctAnswer = true
}
choices.forEach( choice=>{
  choice.addEventListener('click',e => {
if(!correctAnswer) return
correctAnswer= false
const  selectedChoice = e.target
console.log(e.target)
const selectedAnswer  = selectedChoice.dataset['number']
 let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
console.log(classToApply)
 if(classToApply === 'correct'){
     incrementScore(SCORE_POINTS)
 }
selectedChoice.parentElement.classList.add(classToApply)

setTimeout(() =>{
 selectedChoice.parentElement.classList.remove(classToApply)   
getNewQuestion()
}, 1000)
})  
})
 function incrementScore (num) { 
    score +=num
    scoresText.innerText = score
}

startGame()



