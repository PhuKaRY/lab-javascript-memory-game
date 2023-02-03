class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }
    let len = this.cards.length;

    while (len > 0) {
      len--;

      let lastPosition = this.cards[len];
      let randomCard = Math.floor(Math.random() * len); // you are getting a random value of the index
      this.cards[len] = this.cards[randomCard]; // use the random value to get a random card at the end of the array
      this.cards[randomCard] = lastPosition;
    }

    /*       let shuffle = Math.floor(Math.random() * this.cards.length);
      let random = this.cards[i];
      this.cards[i] = this.cards[shuffle]; */

    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed !== this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}
