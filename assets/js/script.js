let jbSum = 0;
let userSum = 0;

window.onload = function () {
    createDeck();
    shuffleDeck();
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