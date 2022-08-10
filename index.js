let firstNum = 6;
let secondNum = 7;
let sum = firstNum + secondNum;
let message = "";
let roundEl = document.getElementById("round");
function start(){
    if(sum < 21){
        message = "You can draw more cards";
       }
       else if(sum === 21){
           message = "You have won blackjack, congrats";
       }
       else{
           message = "You have lost, sorry";
       }
    roundEl.textContent = message
}