let jbSum = 0;
let userSum = 0;

let hidden;

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
}

function getValue(card) { //finds the value of the card and assigns "A" the value of 11 and "K, Q, J" the value of 10 
    let data = card.split("-");
    let value = date[0];

    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}