
//declearing variables (game elements)
let firstCard = randomIntFromInterval(2, 11);//first random card
let secondCard = randomIntFromInterval(2, 9);//second randomo card
let firstCardC = randomIntFromInterval(2, 11);//first random card for Computer
let secondCardC = randomIntFromInterval(2, 9);//second randomo card for Computer
let sum = firstCard + secondCard;//sum of cards USERS
let sumC = firstCardC + secondCardC;//sum of cards COMPUTER
let hasBlackJack = false;
let isAlive = true;
let message = "";

//getting elements from index.html and declearing them
//User
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cardEl = document.getElementById("card-el");
let startBtn = document.getElementById("startBtn");
let newCardBtn = document.getElementById("newCardBtn");
//Computer
let sumElc = document.getElementById("sum-elc");
let cardsElc = document.getElementById("cards-elc");
let cardElc = document.getElementById("card-elc");

//an arrow function which adds animation after we win the blackjack
const animation = () => {
    messageEl.classList.add("horizTranslate");
    //takes a animation that is on style.css with name #message-el.horizTranslate
}

//function to restart the game
function restart() {
    //this function restarts the page 
    location.reload();
}

//function to generate a ranodm number
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
    //returning a random int as cardnumber
}

function startGame() {
    //displaying the cards on the screen for user
    cardsEl.textContent = "Your Cards: |" + firstCard + "| |" + secondCard + "|";
    //displaying the sum of two card on the screen for user
    sumEl.textContent = "Sum: " + sum;

    //displaying the cards on the screen for the Computer
    cardsElc.textContent = "Computer Cards: |" + firstCardC + "| |" + secondCardC + "|";
    //displaying the sum of two card on the screen for the Computer
    sumElc.textContent = "Sum: " + sumC;

    if (sum <= 20 && sumC <= 20) {
        message = "Want to draw a new card?";
        isAlive = true;
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        animation();
        hasBlackJack = true;
        isAlive = true;
    }
    else if (sumC === 21) {
        message = "Computer got Blackjack!";
        animation();
        hasBlackJack = true;
        isAlive = true;
    }
    else if (sumC >= 22) {
        message = "You won the game!";
        isAlive = false;
        if (isAlive == false && hasBlackJack == false) {
            setTimeout(() => restart(), 4500);
        }
    }
    else if (sum >= 22) {
        message = "You're out of the game!";
        isAlive = false;
        if (isAlive == false && hasBlackJack == false) {
            setTimeout(() => restart(), 4500);
        }
    }
    //the message is gonna be printed the way if statement returns it
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    // 1. Create a card variable, and givint it a random value from 1 to 11
    let nextCard = randomIntFromInterval(2, 11);
    // 2. Adding the new card to the sum variable
    cardEl.textContent = "NewCard: |" + nextCard + "| ";
    console.log("The next card is generated with value : " + nextCard);
    sum = sum + nextCard;
    
    // 3. Calling startGame() function so that the games countinues
    startGame();
}
function newCardC() {
    // 1. Create a card variable for nextCard for Computer
    let nextCardC = randomIntFromInterval(2, 11);
    // 2. Adding the new card to the sum variable
    cardElc.textContent = "NewCard: |" + nextCardC + "| ";
    console.log("The next card is generated with value : " + nextCardC);
    sumC = sumC + nextCardC;
    // 3. Calling startGame() function so that the games countinues
    startGame();
}

//This is a very small JavaScript project to test my beginner JavaScript skills
//Thansks for having a look at my code :)

//www.eniskastrati.de
//www.github.com/eniskastrati