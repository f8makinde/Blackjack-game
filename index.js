let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let roundEl = document.querySelector("#round");
let sumEl = document.querySelector("#sum");
let cardsEl = document.getElementById("card");

function start(){
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
        cardsEl.innerHTML = `Card: ${firstCard} ${secondCard}`;
}
function newCard(){
    let card = 2;
    sum += card;
    renderGame();
}