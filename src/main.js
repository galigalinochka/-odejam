import ancientsData from "../data/ancients.js";
import difficulties from "../data/difficulties.js";
import blueCardsData from "../data/mythicCards/blue/index.js";
import brownCardsData from "../data/mythicCards/brown/index.js";
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


let chooseAncient = (event) => {
    if (event.target.id === 'azathoth') {
        difficultyContainer.style.display = 'flex';
        getAncientCard(event);
    } if (event.target.id === 'cthulhu') {
        difficultyContainer.style.display = 'flex';
        getAncientCard(event);
    } if (event.target.id === 'iogSothoth') {
        difficultyContainer.style.display = 'flex';
        getAncientCard(event);
    } if (event.target.id === 'shubNiggurath') {
        difficultyContainer.style.display = 'flex';
        getAncientCard(event);
    }
};

ancientsContainer.addEventListener('click',  chooseAncient);

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
        getDifficultyLevel(event);
    }
})

shuffleButton.addEventListener('click', showDesk);

function showDesk() {
    currenState.style.display = 'inline';
    shuffleButton.style.display = 'none';
    desk.style.display = 'inline';
}

//Определение состава карт

let ancientMap = []; 

function getAncientCard(event) {
    
    let chosenAncientMap = [];
    switch (event.target.id) {
        case 'azathoth':
            chosenAncientMap =  ancientsData[0];
            ancientMap.blueCards = Object.values(chosenAncientMap)[3].blueCards + Object.values(chosenAncientMap)[4].blueCards + Object.values(chosenAncientMap)[5].blueCards;
            ancientMap.greenCards = Object.values(chosenAncientMap)[3].greenCards + Object.values(chosenAncientMap)[4].greenCards + Object.values(chosenAncientMap)[5].greenCards;
            ancientMap.brownCards = Object.values(chosenAncientMap)[3].brownCards + Object.values(chosenAncientMap)[4].brownCards + Object.values(chosenAncientMap)[5].brownCards;
            console.log(ancientMap);
        break;
        case 'cthulhu':
            chosenAncientMap =  ancientsData[1];
            ancientMap.blueCards = Object.values(chosenAncientMap)[3].blueCards + Object.values(chosenAncientMap)[4].blueCards + Object.values(chosenAncientMap)[5].blueCards;
            ancientMap.greenCards = Object.values(chosenAncientMap)[3].greenCards + Object.values(chosenAncientMap)[4].greenCards + Object.values(chosenAncientMap)[5].greenCards;
            ancientMap.brownCards = Object.values(chosenAncientMap)[3].brownCards + Object.values(chosenAncientMap)[4].brownCards + Object.values(chosenAncientMap)[5].brownCards;
            console.log(ancientMap);
        break;
        case 'iogSothoth':
            chosenAncientMap =  ancientsData[2];
            ancientMap.blueCards = Object.values(chosenAncientMap)[3].blueCards + Object.values(chosenAncientMap)[4].blueCards + Object.values(chosenAncientMap)[5].blueCards;
            ancientMap.greenCards = Object.values(chosenAncientMap)[3].greenCards + Object.values(chosenAncientMap)[4].greenCards + Object.values(chosenAncientMap)[5].greenCards;
            ancientMap.brownCards = Object.values(chosenAncientMap)[3].brownCards + Object.values(chosenAncientMap)[4].brownCards + Object.values(chosenAncientMap)[5].brownCards;
            console.log(ancientMap);
        break;  
        case 'shubNiggurath':
            chosenAncientMap =  ancientsData[3];
            ancientMap.blueCards = Object.values(chosenAncientMap)[3].blueCards + Object.values(chosenAncientMap)[4].blueCards + Object.values(chosenAncientMap)[5].blueCards;
            ancientMap.greenCards = Object.values(chosenAncientMap)[3].greenCards + Object.values(chosenAncientMap)[4].greenCards + Object.values(chosenAncientMap)[5].greenCards;
            ancientMap.brownCards = Object.values(chosenAncientMap)[3].brownCards + Object.values(chosenAncientMap)[4].brownCards + Object.values(chosenAncientMap)[5].brownCards;
            console.log(ancientMap);
        break;  
    }
    return ancientMap;
}

function getDifficultyLevel(event) {
    switch (event.target.id) {
        case 'very easy':
            console.log(difficulties[0]);
            getBlueCardStack();
            getGreenCardStack();
            getBrownCardStack();
            break;
        case 'easy':
            console.log(difficulties[1]);
            break;
        case 'normal':
            console.log(difficulties[2]);
            break;
        case 'hard': 
            console.log(difficulties[3]);
            break;
            case 'very hard':
            console.log(difficulties[4]);
            break;
    }

}

function getSet(blueCardsData, greenCardsData, brownCardsData) {
    console.log('Создание набора для игры');
    console.log(ancientMap);
}

//Перемешиваем колоды карт по цветам

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
return arr;
}

// Создаем стопки карт по выбранному уровню

let shuffleBlueCards = shuffleArray(blueCardsData);
let shuffleGreenCards = shuffleArray(greenCardsData);
let shuffleBrownCards = shuffleArray(brownCardsData);


let blueCardsStackEasy = shuffleBlueCards.filter(item => item.difficulty === 'easy');
let greenCardsStackEasy = shuffleGreenCards.filter(item => item.difficulty === 'easy');
let brownCardsStackEasy = shuffleBrownCards.filter(item => item.difficulty === 'easy');

let blueCardsStackNormal = shuffleBlueCards.filter(item => item.difficulty === 'normal');
let greenCardsStackNormal = shuffleGreenCards.filter(item => item.difficulty === 'normal');
let brownCardsStackNormal = shuffleBrownCards.filter(item => item.difficulty === 'normal');

console.log(blueCardsStackNormal);
console.log(greenCardsStackNormal);
console.log(brownCardsStackNormal);

function getBlueCardStack() {
    let newBlueStack;
    if (blueCardsStackEasy.length >= ancientMap.blueCards) {
        newBlueStack = blueCardsStackEasy.slice(0, ancientMap.blueCards);
    //console.log(ancientMap.blueCards);
    //console.log(blueCardsStackEasy.length);
    //console.log('карт изи больше, чем требуется')
    }
    return newBlueStack;
}

function getGreenCardStack() {
    //console.log(fff());
     
     let newGreenStack = greenCardsStackEasy.slice(0, ancientMap.greenCards);
    // console.log(ancientMap.greenCards);
     //console.log(newGreenStack);
     return newGreenStack;
 }

 function getBrownCardStack() {
    //console.log(fff());
    let newBrownStack;
    if (brownCardsStackEasy.length >= ancientMap.brownCards) {
        newBrownStack = brownCardsStackEasy.slice(0, ancientMap.brownCards);
    } else {
        newBrownStack = brownCardsStackEasy.slice(0, ancientMap.brownCards).push(brownCardsStackNormal[1]); 
    }

     //console.log(ancientMap.brownCards);
     console.log(newBrownStack);
     return newBrownStack;
 }
 