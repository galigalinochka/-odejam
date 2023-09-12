import ancientsData from "../data/ancients.js";
import difficulties from "../data/difficulties.js";
import blueCardsData from "../data/mythicCards/blue/index.js";
import brownCardsData from "../data/mythicCards/brown/index.js";
import greenCardsData from "../data/mythicCards/green/index.js";

console.log(`Сомооценка: 65 баллов
На текущий момент реализован только Очень легкий уровень сложности, остальные очень постараюсь добработать до 31 августа.
1. Карты Древнего + 20 (в консоль выводится информация о Древнем, на карту которого был сделан клик);
2.На выбор предоставляется несколько уровней сложности (максимум 5) + 5 (реализован только Очень легкий уровень сложности)
3. Карты замешиваются согласно правилам игры + 40
4. Есть трекер текущего состояния колоды - 0 баллов`);

/*console.log(difficulties);
console.log(blueCardsData);
console.log(browmCardsData);
console.log(greenCardsData);
console.log(ancients);*/

//const ancients = document.querySelectorAll('.ancient-card');
const ancientsContainer = document.querySelector('.ancients-container');
const azathothCard = document.getElementById('azathoth');
const cthulhuCard = document.getElementById('cthulhu');
const iogSothothCard = document.getElementById('iogSothoth');
const shubNiggurathCard = document.getElementById('shubNiggurath');
const difficultyContainer = document.querySelector('.difficulty-container');
const shuffleButton = document.querySelector('.shuffle-button');
const deskContainer = document.querySelector('.desk-container');
const currenState = document.querySelector('.current-state');
const deskBack = document.querySelector('.desk.back');
const deskFlipped = document.querySelector('.desk.flipped');
const desk = document.querySelector('.cards-container');
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
const btnOnloadGame = document.querySelector('.button.onload-game');


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
        getDifficultyLevel(event); // функция отрабатывает при клике по контейнеру с 
        //уровнями сложности, возвращает массив, в котором указывается {id: 'very easy', name: 'Очень легкий уровень'},
    }    
})

function getDifficultyLevel(event) {
    switch (event.target.id) {
        case 'very easy':
            console.log(`Выбран уровень: ${difficulties[0].id} ▼`);
            console.log(difficulties[0]);
            getBlueCardStackEasy(); //получаем массив с картами по уровню сложности
            getGreenCardStackEasy();
            getBrownCardStackEasy();
            console.log(event.target.id);
            return difficulties[0]; //{id: 'very easy', name: 'Очень легкий уровень'}
     
        case 'easy':
            
            console.log(difficulties[1]);
            return difficulties[1];
            
        case 'normal':
            
            console.log(difficulties[2]);
            return difficulties[2];
            
        case 'hard': 
            
            
            console.log(difficulties[3]);
            return difficulties[3];
           
        case 'very hard':
            
            console.log(difficulties[4]);
            getBlueCardStackHard();
            getGreenCardStackHard();
            getBrownCardStackHard();
            return difficulties[4];      
    }
}

shuffleButton.addEventListener('click', showDesk);

function showDesk() {
    currenState.style.display = 'inline';
    shuffleButton.style.display = 'none';
    desk.style.display = 'flex';
    //console.log(event);
    //if(level.id === 'very easy') {
    shuffleCardsEasy();
   // } else {console.log('выбран другой уровень')}
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
            azathothCard.style.transform = 'scale(1.2)';
            //console.log(ancientMap);
           console.log(`Выбран Древний со следующими данными: name - ${chosenAncientMap.id} ▼`);
           console.log(chosenAncientMap);
        break; 
        case 'cthulhu':
            chosenAncientMap =  ancientsData[1];
            ancientMap.blueCards = Object.values(chosenAncientMap)[3].blueCards + Object.values(chosenAncientMap)[4].blueCards + Object.values(chosenAncientMap)[5].blueCards;
            ancientMap.greenCards = Object.values(chosenAncientMap)[3].greenCards + Object.values(chosenAncientMap)[4].greenCards + Object.values(chosenAncientMap)[5].greenCards;
            ancientMap.brownCards = Object.values(chosenAncientMap)[3].brownCards + Object.values(chosenAncientMap)[4].brownCards + Object.values(chosenAncientMap)[5].brownCards;
            cthulhuCard.style.transform = 'scale(1.2)';
            console.log(`Выбран Древний со следующими данными: name - ${chosenAncientMap.id} ▼`);
           console.log(chosenAncientMap);
        break;
        case 'iogSothoth':
            chosenAncientMap =  ancientsData[2];
            ancientMap.blueCards = Object.values(chosenAncientMap)[3].blueCards + Object.values(chosenAncientMap)[4].blueCards + Object.values(chosenAncientMap)[5].blueCards;
            ancientMap.greenCards = Object.values(chosenAncientMap)[3].greenCards + Object.values(chosenAncientMap)[4].greenCards + Object.values(chosenAncientMap)[5].greenCards;
            ancientMap.brownCards = Object.values(chosenAncientMap)[3].brownCards + Object.values(chosenAncientMap)[4].brownCards + Object.values(chosenAncientMap)[5].brownCards;
            iogSothothCard.style.transform = 'scale(1.2)';
            console.log(`Выбран Древний со следующими данными: name - ${chosenAncientMap.id} ▼`);
            console.log(chosenAncientMap);
        break;  
        case 'shubNiggurath':
            chosenAncientMap =  ancientsData[3];
            ancientMap.blueCards = Object.values(chosenAncientMap)[3].blueCards + Object.values(chosenAncientMap)[4].blueCards + Object.values(chosenAncientMap)[5].blueCards;
            ancientMap.greenCards = Object.values(chosenAncientMap)[3].greenCards + Object.values(chosenAncientMap)[4].greenCards + Object.values(chosenAncientMap)[5].greenCards;
            ancientMap.brownCards = Object.values(chosenAncientMap)[3].brownCards + Object.values(chosenAncientMap)[4].brownCards + Object.values(chosenAncientMap)[5].brownCards;
            shubNiggurathCard.style.transform = 'scale(1.2)';
            console.log(`Выбран Древний со следующими данными: name - ${chosenAncientMap.id} ▼`);
            console.log(chosenAncientMap);
        break;  
    }
    return `${ancientMap} ${chosenAncientMap}`;
}



/*function getSet(blueCardsData, greenCardsData, brownCardsData) {
    console.log('Создание набора для игры');
    console.log(ancientMap);
}*/

//Перемешивание

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

let blueCardsStackHard = shuffleBlueCards.filter(item => item.difficulty === 'hard');
let greenCardsStackHard = shuffleGreenCards.filter(item => item.difficulty === 'hard');
let brownCardsStackHard = shuffleBrownCards.filter(item => item.difficulty === 'hard');


//console.log(blueCardsStackHard);
//console.log(greenCardsStackHard);
//console.log(brownCardsStackHard);

// Очень легкий уровень - формируем стопки карт

let newBlueStackEasy = [];
function getBlueCardStackEasy() {
    
    let notEnoughCount;
    let sliceFromNormal;
    if (blueCardsStackEasy.length >= ancientMap.blueCards) {
        newBlueStackEasy = blueCardsStackEasy.slice(0, ancientMap.blueCards);
    } else {
        notEnoughCount = ancientMap.blueCards - blueCardsStackEasy.length;
        sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
        newBlueStackEasy = blueCardsStackEasy.concat(sliceFromNormal);
    }
    console.log(`Из общего набора карт выбраны карты согласно выбранной сложности: СИНИЕ ▼`);
    console.log(newBlueStackEasy);
    return newBlueStackEasy;    
}

let newGreenStackEasy = [];
function getGreenCardStackEasy() {
     
     let notEnoughCount;
     let sliceFromNormal;
     if (greenCardsStackEasy.length >= ancientMap.greenCards) {
     newGreenStackEasy = greenCardsStackEasy.slice(0, ancientMap.greenCards);
     } else {
        notEnoughCount = ancientMap.greenCards - greenCardsStackEasy.length;
        sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
        newGreenStackEasy = greenCardsStackEasy.concat(sliceFromNormal);
     }
     console.log(`Из общего набора карт выбраны карты согласно выбранной сложности: ЗЕЛЕНЫЕ ▼`);
     console.log(newGreenStackEasy);
     return newGreenStackEasy;
 }

 let newBrownStackEasy = [];
 function getBrownCardStackEasy() {
    let notEnoughCount;
    let sliceFromNormal;
    if (brownCardsStackEasy.length >= ancientMap.brownCards) {
        newBrownStackEasy = brownCardsStackEasy.slice(0, ancientMap.brownCards);
        console.log(newBrownStack);
    } else {
        notEnoughCount = ancientMap.brownCards - brownCardsStackEasy.length;
        sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
        newBrownStackEasy = brownCardsStackEasy.concat(sliceFromNormal);
       
    }
    console.log(`Из общего набора карт выбраны карты согласно выбранной сложности: КОРИЧНЕВЫЕ ▼`);
     console.log(newBrownStackEasy);
     return newBrownStackEasy;
 }

 //Очень высокий уровень сложности - формируем стопки карт

 /*let newBlueStackHard = [];
 function getBlueCardStackHard() {
     
     let notEnoughCount;
     let sliceFromNormal;
     if (blueCardsStackHard.length >= ancientMap.blueCards) {
         newBlueStackHard = blueCardsStackHard.slice(0, ancientMap.blueCards);
     } else {
         notEnoughCount = ancientMap.blueCards - blueCardsStackHard.length;
         sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
         newBlueStackHard = blueCardsStackHard.concat(sliceFromNormal);
     }
     console.log(newBlueStackHard);
     return newBlueStackHard;    
 }
 
 let newGreenStackHard = [];
 function getGreenCardStackHard() {
      
      let notEnoughCount;
      let sliceFromNormal;
      if (greenCardsStackHard.length >= ancientMap.greenCards) {
      newGreenStackHard  = greenCardsStackHard.slice(0, ancientMap.greenCards);
      } else {
         notEnoughCount = ancientMap.greenCards - greenCardsStackHard.length;
         sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
         newGreenStackHard = greenCardsStackHard.concat(sliceFromNormal);
      }
      console.log(newGreenStackHard);
      return newGreenStackHard;
  }
 
  let newBrownStackHard = [];
  function getBrownCardStackHard() {
     let notEnoughCount;
     let sliceFromNormal;
     if (brownCardsStackHard.length >= ancientMap.brownCards) {
         newBrownStackHard = brownCardsStackHard.slice(0, ancientMap.brownCards);
         console.log(newBrownStackHard);
     } else {
         notEnoughCount = ancientMap.brownCards - brownCardsStackHard.length;
         sliceFromNormal = brownCardsStackNormal.slice(0, notEnoughCount);
         newBrownStackHard = brownCardsStackHard.concat(sliceFromNormal);
     }
      console.log(newBrownStackHard);
      return newBrownStackEasy;
  }*/
 

//let secondShuffleGreenCards = shuffleArray(newGreenStack);
//let secondShuffleBrownCards = shuffleArray(newBrownStack);

let shuffledBlueCardsStackEasy;
let shuffledGreenCardsStackEasy;
let shuffledBrownCardsStackEasy;

function shuffleCardsEasy() {
    let secondBlueCardsStackEasy = getBlueCardStackEasy();
    shuffledBlueCardsStackEasy = shuffleArray(secondBlueCardsStackEasy);

    let secondGreenCardsStackEasy = getGreenCardStackEasy();
    shuffledGreenCardsStackEasy = shuffleArray(secondGreenCardsStackEasy);

    let secondBrownCardsStackEasy = getBrownCardStackEasy();
    shuffledBrownCardsStackEasy = shuffleArray(secondBrownCardsStackEasy);
    console.log('Отобранные карты перемешиваются отдельно ▼');
    console.log(shuffledBlueCardsStackEasy);
    console.log(shuffledGreenCardsStackEasy);
    console.log(shuffledBrownCardsStackEasy);

    return `${shuffledBlueCardsStackEasy} ${shuffledGreenCardsStackEasy} ${shuffledBrownCardsStackEasy}`;   
}

/*let shuffledBlueCardsStackHard;
let shuffledGreenCardsStackHard;
let shuffledBrownCardsStackHard;*/

/*function shuffleCardsHard() {

    shuffledBlueCardsStackHard = shuffleArray(newBlueStackHard);

    shuffledGreenCardsStackHard = shuffleArray(newGreenStackHard);

    shuffledBrownCardsStackHard = shuffleArray(newBrownStackHard);

    console.log(shuffledBlueCardsStackHard);
    console.log(shuffledGreenCardsStackHard);
    console.log(shuffledBrownCardsStackHard);

    return `${shuffledBlueCardsStackHard} ${shuffledGreenCardsStackHard} ${shuffledBrownCardsStackHard}`;   
}*/


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
}

let firstStageCards = [];
let secondStageCards = [];
let thirdStageCards = [];

let shuffledfirstStageCardsEasy;
let shuffledSecondStageCardsEasy;
let shuffledThirdStageCardsEasy;


function getCardsForFirstStage() {
    let blue1 = chosenAncientMap.firstStage.blueCards;
    let green1 = chosenAncientMap.firstStage.greenCards;
    let brown1 = chosenAncientMap.firstStage.brownCards;
    
    if (blue1 > 0) {
       // firstStageCards[0] = shuffledBlueCardsStack.slice(-`${chosenAncientMap.firstStage.blueCards}`);
       firstStageCards[0] = shuffledBlueCardsStackEasy.splice(`${-shuffledBlueCardsStackEasy.length}`, blue1);
       //console.log(firstStageCards[0]);
    } else firstStageCards[0] = [];
        
    if (green1 > 0) {
        //firstStageCards[1] = shuffledGreenCardsStack.slice(-`${chosenAncientMap.firstStage.greenCards}`);
        firstStageCards[1] = shuffledGreenCardsStackEasy.splice(`${-shuffledGreenCardsStackEasy.length}`, green1);
    } else firstStageCards[1] = [];

    if (brown1 > 0) {    
        firstStageCards[2] = shuffledBrownCardsStackEasy.splice(`${-shuffledBrownCardsStackEasy.length}`, brown1)
    //firstStageCards[2] =  shuffledBrownCardsStack.slice(-`${chosenAncientMap.firstStage.brownCards}`);
    } else firstStageCards[2] = [];
    
    
    let x = firstStageCards.flat(Infinity);
    shuffledfirstStageCardsEasy = shuffleArray(x);
    console.log('Сформированы карты для первого этапа игры, стопка отдельно перемешана ▼');
    console.log(shuffledfirstStageCardsEasy);
    return shuffledfirstStageCardsEasy;
}

function getCardsForSecondStage() {
    let blue2 = chosenAncientMap.secondStage.blueCards;
    let green2 = chosenAncientMap.secondStage.greenCards;
    let brown2 = chosenAncientMap.secondStage.brownCards;
    if (blue2 > 0) {
        secondStageCards[0] = shuffledBlueCardsStackEasy.splice(`${-shuffledGreenCardsStackEasy.length}`, blue2);
       // secondStageCards[0] = shuffledBlueCardsStack.slice(-`${chosenAncientMap.secondStage.blueCards}`);
    } else secondStageCards[0] = [];
   
    if (green2 > 0) {
        secondStageCards[1] = shuffledGreenCardsStackEasy.splice(`${-shuffledBlueCardsStackEasy.length}`, green2);
    } else secondStageCards[1] = [];
    //secondStageCards[1] = shuffledGreenCardsStack.slice(-`${chosenAncientMap.secondStage.greenCards}`);

    if (brown2 > 0) {
        secondStageCards[2] = shuffledBrownCardsStackEasy.splice(`${-shuffledBrownCardsStackEasy.length}`, brown2);
    } else secondStageCards[2] = [];
    //secondStageCards[2] =  shuffledBrownCardsStack.slice(-`${chosenAncientMap.secondStage.brownCards}`);
    
    let y = secondStageCards.flat(Infinity);
    shuffledSecondStageCardsEasy = shuffleArray(y);
    //console.log(secondStageCards.flat(Infinity));
    console.log('Сформированы карты для второго этапа игры, стопка отдельно перемешана ▼');
    console.log(shuffledSecondStageCardsEasy);
    return shuffledSecondStageCardsEasy;
    
}

function getCardsForThirdStage() {
    let blue3 = chosenAncientMap.thirdStage.blueCards;
    let green3 = chosenAncientMap.thirdStage.greenCards;
    let brown3 = chosenAncientMap.thirdStage.brownCards;

    if (blue3 > 0) {
    thirdStageCards[0] = shuffledBlueCardsStackEasy.splice(`${-shuffledBrownCardsStackEasy.length}`, blue3);
    } else secondStageCards[0] = [];

    if (green3 > 0) {
        thirdStageCards[1] = shuffledGreenCardsStackEasy.splice(`${-shuffledGreenCardsStackEasy.length}`, green3);
    } else thirdStageCards[1] = [];

    if(brown3 > 0) {
        thirdStageCards[2] = shuffledBrownCardsStackEasy.splice(`${-shuffledBrownCardsStackEasy.length}`, brown3);
    } else thirdStageCards[2] = [];
    let z = thirdStageCards.flat(Infinity);
    shuffledThirdStageCardsEasy = shuffleArray(z);
    //console.log(thirdStageCards.flat(Infinity));
    console.log('Сформированы карты для третьего этапа игры, стопка отдельно перемешана ▼');
    console.log(shuffledThirdStageCardsEasy);
    return shuffledThirdStageCardsEasy;
}

let CardsStackInPlayEasy;

function getCardsStackInPlay() {
    CardsStackInPlayEasy = [...shuffledThirdStageCardsEasy, ...shuffledSecondStageCardsEasy, ...shuffledfirstStageCardsEasy];
    console.log('Сформирована стопка карт для игры, карты из первого этапа входят в игру первыми ▼');
    console.log(CardsStackInPlayEasy);
    return CardsStackInPlayEasy;
}

deskBack.addEventListener('click', showCard);

//let dotGreenFirstCount = chosenAncientMap.firstStage.greenCards;
//let dotBrownFirstCount = chosenAncientMap.firstStage.brownCards;
//let dotBlueFirstCount = chosenAncientMap.firstStage.blueCards;
//let dotGreenSecondCount = chosenAncientMap.secondStage.greenCards;
//let dotBrownSecondCount = chosenAncientMap.secondStage.brownCards;
//let dotBlueSecondCount = chosenAncientMap.secondStage.blueCards;
//let dotGreenThirdCount = chosenAncientMap.thirdStage.greenCards;
//let dotBrownThirdCount = chosenAncientMap.thirdStage.brownCards;
//let dotBlueThirdCount = chosenAncientMap.thirdStage.blueCards;
//console.log(dotGreenFirstCount);
//console.log(chosenAncientMap.id);
//console.log(shuffledfirstStageCards);
//console.log(CardsStackInPlay.length);

function showCard() {
    //if (chosenAncientMap.id = 'azathoth'){
        //if(shuffledfirstStageCards > 0) { 
            if(CardsStackInPlayEasy.length > 0) {
                let link = CardsStackInPlayEasy[CardsStackInPlayEasy.length-1].cardFace;
                deskFlipped.style.backgroundImage = `url(${link})`;
                CardsStackInPlayEasy.pop();
               // if (shuffledfirstStageCards[shuffledfirstStageCards.length].color = 'green') {

                //}
                console.log('Карты входят в игру по одной.')
                console.log(CardsStackInPlayEasy);
                //console.log(chosenAncientMap.firstStage.length);
    //} 
    
    } else {
        console.log('их ноль');
        deskBack.style.display = 'none';
        deskFlipped.style.alignSelf = 'flex-end';
       // btnOnloadGame.style.display = 'inline';
    }
//}

    return CardsStackInPlayEasy;
}

btnOnloadGame.addEventListener('click', () => location.reload());


