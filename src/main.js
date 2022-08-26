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
const desk = document.querySelector('.desk.back');
console.log(desk);
const difficultyButtons = document.querySelectorAll('.button.difficulty');
//const stageContainer = document.querySelector('stage-container');
const dotGreenFirst = document.querySelector('.dot.green.first');
const dotBrownFirst = document.querySelector('.dot.brown.first');
const dotBlueFirst = document.querySelector('.dot.blue.first');
const dotGreenSecond = document.querySelector('.dot.green.second');
const dotBrownSecond = document.querySelector('.dot.brown.second');
const dotBlueSecond = document.querySelector('.dot.blue.second');
const dotGreenThird = document.querySelector('.dot.green.third');
const dotBrownThird = document.querySelector('.dot.brown.third');
const dotBlueThird = document.querySelector('.dot.blue.third');


let ANCIENT;
let chooseAncient = (event) => {
    if (event.target.id === 'azathoth') {
        difficultyContainer.style.display = 'flex';
        ANCIENT = 
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
    shuffleCards();
    getDesk();
}

//Определение состава карт

let ancientMap = []; 
let chosenAncientMap = [];

function getAncientCard(event) {
    
    
    switch (event.target.id) {
        case 'azathoth':
            chosenAncientMap =  ancientsData[0];
            ancientMap.greenCards = Object.values(chosenAncientMap)[3].greenCards + Object.values(chosenAncientMap)[4].greenCards + Object.values(chosenAncientMap)[5].greenCards;
            ancientMap.blueCards = Object.values(chosenAncientMap)[3].blueCards + Object.values(chosenAncientMap)[4].blueCards + Object.values(chosenAncientMap)[5].blueCards;
            ancientMap.brownCards = Object.values(chosenAncientMap)[3].brownCards + Object.values(chosenAncientMap)[4].brownCards + Object.values(chosenAncientMap)[5].brownCards;
            console.log(ancientMap);
            console.log(chosenAncientMap);
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
    return `${ancientMap} ${chosenAncientMap}`;
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

/*console.log(blueCardsStackNormal);
console.log(greenCardsStackNormal);
console.log(brownCardsStackNormal);*/

// Очень легкий

function getBlueCardStack() {
    let newBlueStack;
    let notEnoughCount;
    let sliceFromNormal;
    if (blueCardsStackEasy.length >= ancientMap.blueCards) {
        newBlueStack = blueCardsStackEasy.slice(0, ancientMap.blueCards);
    } else {
        notEnoughCount = ancientMap.blueCards - blueCardsStackEasy.length;
        sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
        newBlueStack = blueCardsStackEasy.concat(sliceFromNormal);
    }
    console.log(newBlueStack);
    return newBlueStack;    
}

let newGreenStack = [];
function getGreenCardStack() {
     
     let notEnoughCount;
     let sliceFromNormal;
     if (greenCardsStackEasy.length >= ancientMap.greenCards) {
     newGreenStack = greenCardsStackEasy.slice(0, ancientMap.greenCards);
     } else {
        notEnoughCount = ancientMap.greenCards - greenCardsStackEasy.length;
        sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
        newGreenStack = greenCardsStackEasy.concat(sliceFromNormal);
     }
     console.log(newGreenStack);
     return newGreenStack;
 }

 let newBrownStack = [];
 function getBrownCardStack() {
    let notEnoughCount;
    let sliceFromNormal;
    if (brownCardsStackEasy.length >= ancientMap.brownCards) {
        newBrownStack = brownCardsStackEasy.slice(0, ancientMap.brownCards);
        console.log(newBrownStack);
    } else {
        notEnoughCount = ancientMap.brownCards - brownCardsStackEasy.length;
        sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
        newBrownStack = brownCardsStackEasy.concat(sliceFromNormal);
       
    }
     console.log(newBrownStack);
     return newBrownStack;
 }
 

//let secondShuffleGreenCards = shuffleArray(newGreenStack);
//let secondShuffleBrownCards = shuffleArray(newBrownStack);

let shuffledBlueCardsStack;
let shuffledGreenCardsStack;
let shuffledBrownCardsStack;
function shuffleCards() {
    let secondBlueCardsStack = getBlueCardStack();
    shuffledBlueCardsStack = shuffleArray(secondBlueCardsStack);
    let secondGreenCardsStack = getGreenCardStack();
    shuffledGreenCardsStack = shuffleArray(secondGreenCardsStack);
    let secondBrownCardsStack = getBrownCardStack();
    shuffledBrownCardsStack = shuffleArray(secondBrownCardsStack);

    console.log(shuffledBlueCardsStack);
    console.log(shuffledGreenCardsStack);
    console.log(shuffledBrownCardsStack);

    return `${shuffledBlueCardsStack} ${shuffledGreenCardsStack} ${shuffledBrownCardsStack}`;
    
}

function getDesk() {
    dotGreenFirst.innerHTML = chosenAncientMap.firstStage.greenCards;
    dotBlueFirst.innerHTML = chosenAncientMap.firstStage.blueCards;
    dotBrownFirst.innerHTML = chosenAncientMap.firstStage.brownCards;

    dotGreenSecond.innerHTML = chosenAncientMap.secondStage.greenCards;
    dotBlueSecond.innerHTML = chosenAncientMap.secondStage.blueCards;
    dotBrownSecond.innerHTML = chosenAncientMap.secondStage.brownCards;

    dotGreenThird.innerHTML = chosenAncientMap.thirdStage.greenCards;
    dotBlueThird.innerHTML = chosenAncientMap.thirdStage.blueCards;
    dotBrownThird.innerHTML = chosenAncientMap.thirdStage.brownCards;
    getCardsForFirstStage();
    getCardsForSecondStage();
    getCardsForThirdStage();
    getCardsStackInPlay();
    console.log(chosenAncientMap.firstStage.greenCards);
    console.log(chosenAncientMap.firstStage.blueCards);
    console.log(chosenAncientMap.firstStage.brownCards);
}

let firstStageCards = [];
let secondStageCards = [];
let thirdStageCards = [];

let shuffledfirstStageCards;
let shuffledSecondStageCards;
let shuffledThirdStageCards;


function getCardsForFirstStage() {
    let blue1 = chosenAncientMap.firstStage.blueCards;
    let green1 = chosenAncientMap.firstStage.greenCards;
    let brown1 = chosenAncientMap.firstStage.brownCards;
    if (blue1 > 0) {
       // firstStageCards[0] = shuffledBlueCardsStack.slice(-`${chosenAncientMap.firstStage.blueCards}`);
       firstStageCards[0] = shuffledBlueCardsStack.splice(`${-shuffledBlueCardsStack.length}`, blue1);
       console.log(firstStageCards[0]);
    } else firstStageCards[0] = [];
        
    if (green1 > 0) {
        //firstStageCards[1] = shuffledGreenCardsStack.slice(-`${chosenAncientMap.firstStage.greenCards}`);
        firstStageCards[1] = shuffledGreenCardsStack.splice(`${-shuffledGreenCardsStack.length}`, green1);
    } else firstStageCards[1] = [];

    if (brown1 > 0) {    
        firstStageCards[2] = shuffledBrownCardsStack.splice(`${-shuffledBrownCardsStack.length}`, brown1)
    //firstStageCards[2] =  shuffledBrownCardsStack.slice(-`${chosenAncientMap.firstStage.brownCards}`);
    } else firstStageCards[2] = [];
    
    
    let x = firstStageCards.flat(Infinity);
    shuffledfirstStageCards = shuffleArray(x);
    console.log(firstStageCards.flat(Infinity));
    console.log(shuffledfirstStageCards);
    return shuffledfirstStageCards;
}

function getCardsForSecondStage() {
    let blue2 = chosenAncientMap.secondStage.blueCards;
    let green2 = chosenAncientMap.secondStage.greenCards;
    let brown2 = chosenAncientMap.secondStage.brownCards;
    if (blue2 > 0) {
        secondStageCards[0] = shuffledBlueCardsStack.splice(`${-shuffledGreenCardsStack.length}`, blue2);
       // secondStageCards[0] = shuffledBlueCardsStack.slice(-`${chosenAncientMap.secondStage.blueCards}`);
    } else secondStageCards[0] = [];
   
    if (green2 > 0) {
        secondStageCards[1] = shuffledGreenCardsStack.splice(`${-shuffledBlueCardsStack.length}`, green2);
    } else secondStageCards[1] = [];
    //secondStageCards[1] = shuffledGreenCardsStack.slice(-`${chosenAncientMap.secondStage.greenCards}`);

    if (brown2 > 0) {
        secondStageCards[2] = shuffledBrownCardsStack.splice(`${-shuffledBrownCardsStack.length}`, brown2);
    } else secondStageCards[2] = [];
    //secondStageCards[2] =  shuffledBrownCardsStack.slice(-`${chosenAncientMap.secondStage.brownCards}`);
    
    let y = secondStageCards.flat(Infinity);
    shuffledSecondStageCards = shuffleArray(y);
    console.log(secondStageCards.flat(Infinity));
    console.log(shuffledSecondStageCards);
    return shuffledSecondStageCards;
    
}

function getCardsForThirdStage() {
    let blue3 = chosenAncientMap.thirdStage.blueCards;
    let green3 = chosenAncientMap.thirdStage.greenCards;
    let brown3 = chosenAncientMap.thirdStage.brownCards;

    if (blue3 > 0) {
    thirdStageCards[0] = shuffledBlueCardsStack.splice(`${-shuffledBrownCardsStack.length}`, blue3);
    } else secondStageCards[0] = [];

    if (green3 > 0) {
        thirdStageCards[1] = shuffledGreenCardsStack.splice(`${-shuffledGreenCardsStack.length}`, green3);
    } else thirdStageCards[1] = [];

    if(brown3 > 0) {
        thirdStageCards[2] = shuffledBrownCardsStack.splice(`${-shuffledBrownCardsStack.length}`, brown3);
    } else thirdStageCards[2] = [];
    //thirdStageCards[1] = shuffledGreenCardsStack.slice(-`${chosenAncientMap.thirdStage.greenCards}`);
    //thirdStageCards[2] =  shuffledBrownCardsStack.slice(-`${chosenAncientMap.thirdStage.brownCards}`);
    let z = thirdStageCards.flat(Infinity);
    shuffledThirdStageCards = shuffleArray(z);
    console.log(thirdStageCards.flat(Infinity));
    console.log(shuffledThirdStageCards);
    return shuffledThirdStageCards;
}

let CardsStackInPlay;

function getCardsStackInPlay() {
    CardsStackInPlay = [...shuffledfirstStageCards, ...shuffledSecondStageCards, ...shuffledThirdStageCards];
    console.log(CardsStackInPlay);
    return CardsStackInPlay;
}

desk.addEventListener('click', showCard);

function showCard() {
    desk.classList.toggle('back');
    desk.classList.toggle('flipped');
}
