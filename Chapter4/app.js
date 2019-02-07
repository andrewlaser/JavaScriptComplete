/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [0,0];
var roundScore = 0;

var activePlayer = 0;
var dice = 6;

document.getElementById('score-0').innerHTML = '0';
document.getElementById('current-0').innerHTML = '0';
document.getElementById('score-1').innerHTML = '0';
document.getElementById('current-1').innerHTML = '0';

function GetRandomDice()
{
    dice = Math.floor(Math.random()*6) + 1;
    return dice;
}

function ChangePlayer()
{
    roundScore = 0;
    dice = 0;
    document.getElementById('current-' + activePlayer).innerHTML = roundScore;    
//    document.querySelector('.dice').style.display = 'none';
    document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
}


//document.querySelector('#current-' + activePlayer).innerHTML = '' + scores[activePlayer] + '';
//document.querySelector('#current-' + activePlayer).textContent = scores[activePlayer];

document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click', function() 
{
    //Random number
    var dice = GetRandomDice();

    //Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    if(dice !== 1)
    {
        roundScore += dice;
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
    ChangePlayer();
}
)

document.querySelector('.btn-new').addEventListener('click', function()
{
    scores = [0,0];
    roundScore = 0;
    dice = 0;

}
)