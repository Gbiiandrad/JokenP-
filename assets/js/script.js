const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score');
const machinesScore = document.querySelector('#machine-score');


let humanScoreNumber = 0;
let machineScoreNumber = 0;


const GAMER_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


//quando clicar chegar a informação
// indentificar qual opção foi escolhido pelo o usuario
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

// opçao escolhida pelo o adversario
const playMachine = () => {
    const choices = [GAMER_OPTIONS.ROCK, GAMER_OPTIONS.PAPER, GAMER_OPTIONS.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}


//comparação das opçoes escolhida pelo o usuario e do adversario
const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} e Maquina: ${machine}`);

    //Colocar a pontuação final de quem ganhou
    if (human === machine) {
        result.innerHTML = "Deu empate!";
    } else if ((human === GAMER_OPTIONS.PAPER && machine === GAMER_OPTIONS.ROCK) || 
    (human === GAMER_OPTIONS.ROCK && machine === GAMER_OPTIONS.SCISSORS) || 
    (human === GAMER_OPTIONS.SCISSORS && machine === GAMER_OPTIONS.PAPER)) {     
        humanScoreNumber ++
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você Ganhou!";
    } else {
        machineScoreNumber ++
        machinesScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você Perdeu!";
    }

}

// Pontuação do usuario

// pontuação do adversario

