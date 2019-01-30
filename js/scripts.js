function getCards() {
  var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
  var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var deckOfCards = [];
  for(i = 0; i < suits.length; i++) {
    for(j = 0; j < values.length; j++) {
      var card = {
        suit: suits[i],
        value: values[j]
      };
      deckOfCards.push(card);
    }
  }
  console.log(deckOfCards);
}
//
// function getCards() {
//   var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
//   var deckOfCards = [];
//   for(i = 0; i  suits.length; i++) {
//     var card = {
//       suit: suits[i]
//     };
//     deckOfCards.push(card);
//   }
//   return console.log(deckOfCards);
// }

document.getElementById("get-deck").addEventListener("click", getCards);
