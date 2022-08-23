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

playerEl.textContent = `${players.name}: $${players.money}`

function getRandomNumber(){
    let randomNum = Math.floor(Math.random() * 13) + 1;
     if(randomNum > 10){
        return 10;
     }
     else if(randomNum === 1){
        return 11;
     }
     else{
        return randomNum;
     }
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
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < allCards.length; i++){
        cardsEl.textContent += allCards[i] + " ";
    }
    sumEl.textContent = `Sum: ${sum}`;
    if(sum < 21){
        message = "Do you want to draw a new card?";
        }
        else if(sum === 21){
            message = "Wooah you have won blackjack, click reset to start game again";
            hasBlackJack = true;
            players.money = 200;
        }
        else{
            message = `Sorry you have lost the game, click reset to start game again`;
            isAlive = false;
            players.money = 0;
        }
        roundEl.textContent = message;    
    
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


