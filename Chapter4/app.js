/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
var winScore = 100;
NewGame();

function NewGame()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('score-0').innerHTML = '0';
    document.getElementById('current-0').innerHTML = '0';
    document.getElementById('score-1').innerHTML = '0';
    document.getElementById('current-1').innerHTML = '0';
    document.getElementById('dice-1').style.display = 'none';


    if(!document.querySelector(".player-0-panel").classList.contains('active'))
    {
        document.querySelector(".player-0-panel").classList.add('active');
    }
    if(document.querySelector(".player-1-panel").classList.contains('active'))
    {
        document.querySelector(".player-1-panel").classList.remove('active');
    }

    document.getElementById('name-0').innerText = 'PLAYER 1';
    document.getElementById('name-1').innerText = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.btn-hold').disabled = false;

}

function GetRandomDice()
{
    var dice = Math.floor(Math.random()*6) + 1;
    return dice;
}

function ChangePlayer()
{
    roundScore = 0;
    document.getElementById('current-' + activePlayer).innerHTML = roundScore;    
    document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
}

document.querySelector('.btn-roll').addEventListener('click', function() 
{
    //Random number
    var dice0 = GetRandomDice();
    var dice1 = GetRandomDice();
    //Display the result
    var diceDom0 = document.getElementById('dice-0');
    diceDom0.style.display = 'block';
    diceDom0.src = 'dice-' + dice0 + '.png';
    var diceDom1 = document.getElementById('dice-1');
    diceDom1.style.display = 'block';
    diceDom1.src = 'dice-' + dice1 + '.png';

    if((dice0 !== 1 && dice1 !== 1) && ((dice0 !== 6 && dice1 !== 6)) )
    {
        roundScore += dice0;
        roundScore += dice1;
    }
    else
    {
        ChangePlayer();
    }
    document.getElementById('current-' + activePlayer).innerHTML = roundScore;
}
)

document.querySelector('.btn-hold').addEventListener('click', function() 
{
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];
    //if reached 100 => won the game
    if(scores[activePlayer] >= winScore)
    {
        document.getElementById('name-' + activePlayer).innerText = 'WINNER!!!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.btn-roll').disabled = true;
        document.querySelector('.btn-hold').disabled = true;
    }
    else
    {
        document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];
        ChangePlayer();
    }
}
)

document.querySelector('.btn-new').addEventListener('click', function()
{
    NewGame();
}
)

document.getElementById('win-score').addEventListener('change', function()
{
    winScore = document.getElementById('win-score').value;
}
)