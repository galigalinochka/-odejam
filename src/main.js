import ancientsData from "../data/ancients.js";
import difficulties from "../data/difficulties.js";
import blueCardsData from "../data/mythicCards/blue/index.js";
import browmCardsData from "../data/mythicCards/brown/index.js";
import greenCardsData from "../data/mythicCards/green/index.js";

/*console.log(ancientsData);
console.log(difficulties);
console.log(blueCardsData);
console.log(browmCardsData);
console.log(greenCardsData);
console.log(ancients);*/

//const ancients = document.querySelectorAll('.ancient-card');
const ancientsContainer = document.querySelector('.ancients-container');
const difficultyContainer = document.querySelector('.difficulty-container');
const shuffleButton = document.querySelector('.shuffle-button');
const deskContainer = document.querySelector('.desk-container');
const currenState = document.querySelector('.current-state');
const desk = document.querySelector('.desk');
const difficultyButtons = document.querySelectorAll('.button.difficulty');


ancientsContainer.addEventListener('click', event => {
    if (event.target.id === 'azathoth') {
        difficultyContainer.style.display = 'flex';
    } if (event.target.id === 'cthulhu') {
        difficultyContainer.style.display = 'flex';
    } if (event.target.id === 'iogSothoth') {
        difficultyContainer.style.display = 'flex';
    } if (event.target.id === 'shubNiggurath') {
        difficultyContainer.style.display = 'flex';
    }
});

difficultyContainer.addEventListener('click', event => {
    if (event.target.className === 'button difficulty press') {
        return;
    } 

    difficultyButtons.forEach(el => {
            if(el.className === 'button difficulty press') {
            el.classList.remove('press');
        }
    })
       if (event.target.className === 'button difficulty') {

        shuffleButton.style.display = 'inline';
        deskContainer.style.display = 'flex';
        currenState.style.display = 'none';
        desk.style.display = 'none';
        event.target.classList.add('press');
    }
})

shuffleButton.addEventListener('click', showDesk);

function showDesk() {
    currenState.style.display = 'inline';
    shuffleButton.style.display = 'none';
    desk.style.display = 'inline';
}