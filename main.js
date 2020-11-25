/* Rules:
>> On the Game initialisation all the score should be zero and dice should be hidden by default and set the player 1 as a active Player.
>> Make the Roll and hold working
>> If the Dice Number = 6 change the player.
>> The player which reaches first 50 points will be the winner !.
>> Once the Winner is decided then the player is not more active to roll or hold dice unless or untill it reinialises the game.
*/

var score, activePlayer, currentScore, dice, playingGame = true;

score = [0,0];
currentScore = 0;
activePlayer = 0;

// >> On the Game initialisation all the score should be zero and dice should be hidden by default and set the player 1 as a active Player.



// Hide the Dice
dice = document.querySelector('.dice');
dice.style.display = 'none';

    // Setting all the score to Zero
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

// >> Make the Roll and hold working

document.getElementById('roll').addEventListener('click', () => {

    if(playingGame){
            // generating the dice number using Math Function
    var diceNumber = Math.floor(Math.random() * 6 + 1);

    // displaying the dice and setting the dice value using diceNumber variable
    dice.style.display = 'block';
    dice.src = './dice/dice-' + diceNumber + '.png';
    
    // If the Dice Number = 6 change the player.

    if(diceNumber !== 6){
        currentScore += diceNumber;
        document.getElementById('current-' + activePlayer ).textContent = currentScore;
    } else {
        changePlayer();
    }
    }

})

// hold the score and store them in score array

document.getElementById('hold').addEventListener('click', () => {
    if(playingGame){
        score[activePlayer] += currentScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
        // The player which reaches first 50 points will be the winner !.
    
        if(score[activePlayer] >= 5) {
            document.querySelector('.player-' + activePlayer).textContent = 'Winner !';
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.player-0-panel').classList.toggle('active');
    
            // Once the Winner is decided then the player is not more active to roll or hold dice unless or untill it reinialises the game.

            playingGame = false;
    
        }
        changePlayer();
    }
})

function changePlayer() {

    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    // assigning the current score to zero;
    document.getElementById('current-' + activePlayer).textContent = currentScore = 0;

    
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');

}


// code for newGame

document.getElementById('new-game').addEventListener('click', newGame);

function newGame(){
    score = [0,0];
currentScore = 0;
activePlayer = 0;

dice.style.display = 'none';

    // Setting all the score to Zero
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

    // setting the player panel &  setting the player 1 as a active
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    // setting the name player 
    document.querySelector('.player-0').textContent = 'Player : 01';
    document.querySelector('.player-1').textContent = 'Player : 02';

    // setting the playing Game to true
    playingGame = true;

}

newGame();