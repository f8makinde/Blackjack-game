let players = {
    name: "Player",
    money: 100
}
let allCards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let roundEl = document.querySelector("#round");
let sumEl = document.querySelector("#sum");
let cardsEl = document.getElementById("card");
let playerEl = document.getElementById("player-el");

function getRandomNumber(){
    let randomNum = Math.floor(Math.random() * 13) + 1;
    return randomNum
}
function start(){
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    allCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    players.money = 100;
    renderGame();
}
function renderGame(){
    sumEl.innerHTML = `Sum: ${sum}`;
    cardsEl.textContent = `Card: `
    for(let i = 0; i < allCards.length; i++){
        cardsEl.textContent += `${allCards[i]} `;
    }
    if(sum < 21){
        message = `Do you want to draw a new card`;
        }
        else if(sum === 21){
            message = `Wooah you have won blackjack`;
            hasBlackJack = true;
            players.money = 200;
        }
        else{
            message = `Sorry you have lost the game`;
            isAlive = false;
            players.money = 0;
        }
        roundEl.textContent = message;
        playerEl.textContent = `${players.name}: $${players.money}`
    
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomNumber();
        sum += card;
        allCards.push(card);
        renderGame();
    }
}

function reset(){
    sumEl.innerHTML = ""
    cardsEl.textContent = ""
    roundEl.innerHTML = "";
    playerEl.innerHTML = "";
    players.money = 100;
}


// let allCards = []
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let roundEl = document.querySelector("#round");
// let sumEl = document.querySelector("#sum");
// let cardsEl = document.getElementById("card");
// document.getElementById("name-el").value;
// let x = document.getElementById("my-text")


// function getRandomNumber(){
//     let randomNum = Math.floor(Math.random() * 13) + 1;
//     return randomNum
// }
// function start(){
//     isAlive = true;
//     let firstCard = getRandomNumber();
//     let secondCard = getRandomNumber();
//     allCards = [firstCard, secondCard];
//     sum = firstCard + secondCard;
//     renderGame();
// }
// function renderGame(){
//     roundEl.textContent = message;
//     sumEl.innerHTML = `Sum: ${sum}`;
//     cardsEl.textContent = `Card: `
//     for(let i = 0; i < allCards.length; i++){
//         cardsEl.textContent += `${allCards[i]} `;
//     } 
//     if(sum < 21){
//         message = `Do you want to draw a new card`;
//         }
//         else if(sum === 21){
//             message = `Wooah you have won blackjack`;
//             hasBlackJack = true;
//         }
//         else {
//             message = `Sorry you have lost the game`;
//             isAlive = true;
//         }       
//    }
// function newCard(){
//     if(isAlive === true && hasBlackJack === false){
//         let card = getRandomNumber();
//         sum += card;
//         allCards.push(card);
//         renderGame();
//     }
// }


// let score = "";
// function allName(){
//     if(sum === 0){
//         score = "";
//     }
//    else if(sum < 21){
//         score = 100 + "💵🙂";
//     }
//     else if(sum === 21){
//         score = 200 + "🤑💵💰🥳";
//     }
//     else if (sum > 21){
//         score = 0 + "😭😭";
//     }

//     x.innerHTML = document.getElementById("name-el").value + " $" + score;
// }
// function reset(){
//     sumEl.innerHTML = "";
//     cardsEl.textContent = "";
//     x.innerHTML = "";
//     document.getElementById("name-el").value = "";
//     score = "";
//     roundEl.textContent = "Draw a new card";
// }
