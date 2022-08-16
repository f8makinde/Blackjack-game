
let allCards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let roundEl = document.querySelector("#round");
let sumEl = document.querySelector("#sum");
let cardsEl = document.getElementById("card");

function getRandomNumber(){
    let randomNum = Math.floor(Math.random() * 13) + 1;
    return randomNum
}
function start(){
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    allCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    if(sum < 21){
        message = `Do you want to draw a new card`;
        }
        else if(sum === 21){
            message = `Wooah you have won blackjack`;
            hasBlackJack = true;
        }
        else{
            message = `Sorry you have lost the game`;
            isAlive = false;
        }
        roundEl.textContent = message;
        sumEl.innerHTML = `Sum: ${sum}`;
        cardsEl.textContent = `Card: `
        for(let i = 0; i < allCards.length; i++){
            cardsEl.textContent += `${allCards[i]} `;
        }
}
function newCard(){
    let card = 2;
    sum += card;
    allCards.push(card);
    renderGame();
}