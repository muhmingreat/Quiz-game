 
 const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#final-score')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const highScore = JSON.parse(localStorage.getItem('highScore')) || []

const MAX_HIGH_SCORES =12 
finalScore.innerText = mostRecentScore

console.log(finalScore)
username.addEventListener('keyup',()=>{
    saveScoreBtn.disabled  = !username.value
})

 function saveHighScore (e){
 e.preventDefault()  
 const score = {
  score: mostRecentScore,
  name:username.value  
 } 
 highScore.push(score)

 highScore.sort((a,b)=>{
    return b.score - a.score
 })
 highScore.splice(12)
 localStorage.setItem('highScore',JSON .stringify(highScore))
 window.location.assign('/')
}