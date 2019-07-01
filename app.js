document.addEventListener('DOMContentLoaded', function() {
    console.log('elements loaded');


    const btnNewGame = document.querySelector('.new-game');
    const btnPaper = document.querySelectorAll('.image')[0];
    const btnRock = document.querySelectorAll('.image')[1];
    const btnScissors = document.querySelectorAll('.image')[2];

    let playerScore = document.querySelector('.game-outcome-player');
    let AiScore = document.querySelector('.game-outcome-ai');

    function AiRandom() {
        let rand;
        let randHand;
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

    let outcomePlayer = 0;
    let outcomeAi = 0;
    let allGames = 0;

    function win() {
        console.log('player win!');
        outcomePlayer += 1;
        playerScore.innerHTML = outcomePlayer;
        allGames += 1;
    }

    function lose() {
        console.log('player lose!');
        outcomeAi += 1;
        AiScore.innerHTML = outcomeAi;
        allGames += 1;
    }

    function draw() {
        console.log('It\'s a draw!');
        allGames += 1;
    }

    function game(userChoice) {
        let AiChoose = AiRandom();
        switch (AiChoose + userChoice) {
            case 'rs':
            case 'pr':
            case 'sp':
                win();
                break;
            case 'sr':
            case 'rp':
            case 'ps':
                lose();
                break;
            case 'ss':
            case 'rr':
            case 'pp':
                draw();
                break;
        }
        return (outcomeAi, outcomePlayer, allGames);
    }

    function main() {
    btnPaper.addEventListener('click', function () {
        game('p');
        console.log('click btnPaper');
    })
    btnRock.addEventListener('click', function () {
        game('r');
        console.log('click btnRock');
    })
    btnScissors.addEventListener('click', function () {
        game('s');
        console.log('click btnScissors');
    })}

    main();

})