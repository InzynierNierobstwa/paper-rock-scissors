document.addEventListener('DOMContentLoaded', function() {
    console.log('elements loaded');


    const btnNewGame = document.querySelector('.new-game');
    const btnPaper = document.querySelectorAll('.image')[0];
    const btnRock = document.querySelectorAll('.image')[1];
    const btnScissors = document.querySelectorAll('.image')[2];

    let playerChoose;

    btnNewGame.addEventListener('click', function(){
        console.log('click btnNewGame')
    })

    btnPaper.addEventListener('click', function() {
        playerChoose = 'paper';
        console.log('click btnPaper', playerChoose);
    })

let rand;
let randHand;

function AiRandom() {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        randHand = 'p';
    } else if (rand === 1) {
        randHand = 'r';
    } else {
        randHand = 's';
    }

    return (randHand);
}

let AiChoose = AiRandom();
let playerChoose = 'p';
let outcomePlayer = 0;
let outcomeAi = 0;
let allGames = 0; // values needed for outcomes

console.log(AiChoose + playerChoose);

function win() {
    console.log('player win!');
    outcomePlayer += 1;
    allGames += 1;
}

function lose() {
    console.log('player lose!');
    outcomeAi += 1;
    allGames += 1;
}

function draw() {
    console.log('It\'s a draw!');
    allGames += 1;
}

function outCompare(AiChoose, playerChoose) {
    switch (AiChoose + playerChoose) {
        case 'rs':
        case 'pr':
        case 'sp':
            win();
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose();
            console.log('player lose');
            outcomeAi += 1;
            allGames += 1;
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            draw();
            console.log('it\'s a draw');
            allGames += 1;
            break;
    }
    return (outcomeAi, outcomePlayer, allGames);
}

console.log(outCompare(AiChoose, playerChoose));