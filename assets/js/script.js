let jbSum = 0;
let userSum = 0;
let userName;

let jbAceCount = 0;
let userAceCount = 0;

let hidden;
let deck;

let canTwist = true; //Allows user to take another card if total value <= 21

let isSoundOn = false; //Sound is automatically off, unless toggled

document.getElementById("toggle-sound").addEventListener("click", function() {
  isSoundOn = true;
});

/* A funciton that opens the game only if a username is entered
And alerts the user to enter a name if there is no value in the field */
function openGame() {

    userName = document.getElementById("name").value;

    if (userName === "") {
        alert("Please enter your Name");
    }
    else {
        alert(`Welcome to JackBlack ${userName}. Good luck`)
        window.location.href = "jackblack.html";
    } 
}

window.onload = function () {
    createDeck();
    shuffleDeck();
    beginGame(); 
};

function createDeck() {
    let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let cardSuit = ["C", "D", "H", "S"];

    deck = [];

    for (let i = 0; i < cardSuit.length; i++) {
        for (let j = 0; j < cardValue.length; j++) {
            deck.push(cardValue[j] + "-" + cardSuit[i]);
        }
    }
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); //Shuffles the deck and assigns a whole number
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    //console.log(deck);
}

function beginGame() {
    hidden = deck.pop(); //removes a card from the deck array and allocates to hidden jb card
    jbSum += getValue(hidden);
    jbAceCount += checkAce(hidden);

    while (jbSum < 17) { //Allows jb to take another card if total < 17
        let allowCard = document.createElement("img");
        let card = deck.pop();
        allowCard.src = "./assets/images/cards/" + card + ".png";
        jbSum += getValue(card);
        jbAceCount += checkAce(card);
        document.getElementById("jbhand").append(allowCard);
    }
    console.log(jbSum);

    //gives the user two cards to begin the game with
    for (let i = 0; i < 2; i++) {
        let allowCard = document.createElement("img");
        let card = deck.pop();
        allowCard.src = "./assets/images/cards/" + card + ".png";
        userSum += getValue(card);
        userAceCount += checkAce(card);
        document.getElementById("userhand").append(allowCard);

    }

    console.log(userSum);
    document.getElementById("twist").addEventListener("click", twist);
    document.getElementById("stick").addEventListener("click", stick);
}

function twist() {
    if (!canTwist) {
        return;
    }

    let allowCard = document.createElement("img");
    let card = deck.pop();
    allowCard.src = "./assets/images/cards/" + card + ".png";
    userSum += getValue(card);
    userAceCount += checkAce(card);
    document.getElementById("userhand").append(allowCard);
    
    if (reduceAce(userSum, userAceCount) > 21) {
        canTwist = false;
    }
    
    document.querySelector(".usertotal").innerText = userSum;
}

function stick() {
    jbSum = reduceAce(jbSum, jbAceCount);
    userSum = reduceAce(userSum, userAceCount);

    canTwist = false;
    document.getElementById("hidden").src = "./assets/images/cards/" + hidden + ".png";

    if (userSum > 21) {
        alert(`Bummer! You bust with ${userSum}.`);
        if (isSoundOn) {
        let audioBust = new Audio("assets/audio/come-on-a-yeah-hah.mp3");
        audioBust.play();
        }
    }
    else if (jbSum > 21) {
        alert(`You Won!! Jack Black busted on ${jbSum}.`);
        if (isSoundOn) {
        let audioWin = new Audio("assets/audio/god-dammit-cage.mp3");
        audioWin.play();
        }
    }
    else if (jbSum == userSum) {
        alert("It's a tie!!");
        if (isSoundOn) {
        let audioTie = new Audio("assets/audio/jack-black-no-way.mp3");
        audioTie.play();
        }
    }
    else if (userSum > jbSum) {
        alert(`Winner!! You scored ${userSum}, whilst Jack scored ${jbSum}.`);
        if (isSoundOn) {
        let audioWin2 = new Audio("assets/audio/jack-black-come-on-with-order.mp3");
        audioWin2.play();
        }
    }
    else if (userSum < jbSum) {
        alert(`Loser!! Jack scored ${jbSum}, loser scores ${userSum}.`);
        if (isSoundOn) {
        let audioLose = new Audio("assets/audio/dig-it-jack-black.mp3");
        audioLose.play();
        }
    }

    document.querySelector(".jbtotal").innerText = jbSum;
    document.querySelector(".usertotal").innerText = userSum;

    /*Create a function to allow user to start a new game 2 seconds after
    witnessing the result*/
    setTimeout(function () {
        if (confirm("Do you want to start a new game?")) {
            location.reload();
        }
    }, 2000); //(2sec)
}

function getValue(card) { //finds the value of the card and assigns "A" the value of 11 and "K, Q, J" the value of 10 
    let data = card.split("-");
    let value = data[0];

    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(userSum, userAceCount) {
    while (userSum > 21 && userAceCount > 0) {
        userSum -= 10;
        userAceCount -= 1;
    }
    return userSum;
}