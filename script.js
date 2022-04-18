let randomNumber = Math.floor(Math.random() *100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton ;
guessField.focus();

function checkGuess(){
    const userGuess = Number(guessField.value);
     if(guessCount === 1){
         guesses.textContent = 'Previous Guesses :';
     }
     guesses.textContent += userGuess + ' ';
   
     if(userGuess === randomNumber){
     lastResult.textContent = 'Great ! You got it right.';
     lastResult.style.backgroundColor = 'green';
     lowOrHi.textContent= '';
     setGameOver();
   }
   else if(guessCount === 10){
    lastResult.textContent =' Game Over !!';
    lowOrHi.textContent = '';
    setGameOver();
   }
   else{
       lastResult.textContent = 'Wrong guess';
       lastResult.style.backgroundColor='red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Last guess is to low';
        }
        else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess is tow high';
        }
   }
   guessCount ++;
   guessField.value='';
   guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('Button');
    resetButton.style.padding='5px';
    resetButton.style.backgroundColor='blue';
    resetButton.style.color='white';
    resetButton.textContent = 'Start New Game !';
    document.body.append(resetButton);
    resetButton.addEventListener('click',reSetGame);
}

function reSetGame(){
  guessCount = 1;
   const resetParas = document.querySelectorAll('.resultParas p');
    for(const resetPara of resetParas){
        resetPara.textContent = '';
    }
     resetButton.parentNode.removeChild(resetButton);
     
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value='';
    guessField.focus();
     
    lastResult.style.backgroundColor='white';
   randomNumber = Math.floor(Math.random() * 100) + 1 ;
}