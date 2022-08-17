let players = {
    name: "Faith",
    money: 200
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
}


