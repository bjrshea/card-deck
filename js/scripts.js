var deckOfCards = [];
var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getCards() {
  for(i = 0; i = suits.length; i++) {
    for(j = 0; j = values.length; j++) {
      var card = {
        suit: suits[i],
        value: values[j]
      };
      console.log(card);
      deckOfCards.push(card);
    }
  }
  return deckOfCards;
}

function test(test) {
  return 2 + test;
}

document.getElementById("get-deck").addEventListener("click", test);
