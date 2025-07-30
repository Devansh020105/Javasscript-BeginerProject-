let randomNumber = (parseInt(Math.random()*100+1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prev = []
let numGuess = 1;

let playgame = true

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }else if(guess<1){
        alert('Please enter the number Greater Then 1')
    }else if(guess > 100){
        alert('Please enter number smaller then 100')
    }
    else{
        prev.push(guess)
        if(numGuess === 11){
            cleanUpGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endgame()
        }else{
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('you guessed it right')
        endgame()
    }
    else if(guess < randomNumber){
        displayMessage('number is tooo low')
    }
    else if(guess>randomNumber){
        displayMessage('number is tooo high')
    }
}

function cleanUpGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess ++
    remaining.innerHTML = `${11-numGuess}` 
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h2 id= "newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playgame = false
    newgame()
}

function newgame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random()*100+1))
        prev = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame = true
    }) 
}