const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const userSelect = document.getElementById('user-select');
const appSelect = document.getElementById('app-select');
const win = document.getElementById('win');

//modal 
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

const choices = ['paper', 'scissors', 'rock'];

let score = 0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
});

reset.addEventListener('click', () => {
    main.style.display = 'flex'
    selection.style.display = 'none';
});


openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


function checkWinner() {
    const appChoice = pickRandomChoice();

    updateSelection(userSelect, userChoice);
    updateSelection(appSelect, appChoice);

    if(userChoice === appChoice) {
        // Egalité
        win.innerHTML = 'c\'est égalité';
    } else if (userChoice === 'paper' && appChoice === 'rock' ||
        userChoice === 'rock' && appChoice === 'scissors' ||
        userChoice === 'scissors' && appChoice === 'paper') {
            // le joueur gagne
            updateScore();
            win.innerHTML = 'tu as gagné';

        } else {
            // l'ordinateur gagne
            win.innerHTML = 'tu as perdu';

        }

        // montre la sélection, cache le principal
        main.style.display = 'none'
        selection.style.display = 'flex';

}

function updateScore() {
    score += 1;

    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    selectionEl.classList.add(`btn-${choice}`);
    selectionEl.querySelector('img').src = `./images/icon-${choice}.svg`;


}