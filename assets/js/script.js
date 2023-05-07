let jbSum = 0;
let userSum = 0;

let jbAceCount = 0;
let userAceCount = 0;

let hidden;
let deck;

let canTwist = true; //Allows user to take another card if total value <= 21

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

    //console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); //Shuffles the deck
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function beginGame() {
    hidden = deck.pop(); //removes a card from the deck array and allocates to hidden jb card
    jbSum += getValue(hidden);
    jbAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(jbSum);

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
}

function stick() {
    jbSum = reduceAce(jbSum, jbAceCount);
    userSum = reduceAce(userSum, userAceCount);

    canTwist = false;
    document.getElementById("hidden").src = "./assets/images/cards/" + hidden + ".png";

    if (userSum > 21) {
        alert(`Bummer! You bust with ${userSum}.`);
    }
    else if (jbSum > 21) {
        alert(`You Won!! Jack Black busted on ${jbSum}.`);
    }
    else if (jbSum == userSum) {
        alert("It's a tie!!");
    }
    else if (userSum > jbSum) {
        alert(`Winner!! You scored ${userSum}, whilst Jack scored ${jbSum}.`);
    }
    else if (userSum < jbSum) {
        alert(`Loser!! Jack scored ${jbSum}, loser scores ${userSum}.`);
    }
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