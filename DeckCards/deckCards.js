var suit = {
    1: "Hearts", 
    2: "Spades",
    3: "Diamonds",
    4: "Clubs",
}

var stringValue = {
    1:"Ace",
    2:"Two",
    3:"Three",
    4:"Four",
    5:"Five",
    6:"Six",
    7:"Seven",
    8:"Eight",
    9:"Nine",
    10:"Ten",
    11:"Jack",
    12:"Queen",
    13:"King"
}

var numericValue = {
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    10:10,
    11:11,
    12:12,
    13:13
}

class Card{
    constructor(suit, stringValue, numericValue){
        this.suit = suit;
        this.stringValue = stringValue;
        this.numericValue = numericValue;
    }
    show(){
        console.log("A card is shown, revealing that it is a" + stringValue+" "+ suit+"!");
    }
}
class Deck{
    constructor(){
        this.cards = [];
        for(var i=1; i<5; i++){
            for(var j=1; j<14; j++){
                var card = new Card(suit[i], stringValue[j], numericValue[j]);
                this.cards.push(card);
            }
        }
    }
    shuffle(){
        var mix = this.cards.length, t, i;
        while(mix){
            i = Math.floor(Math.random()*mix --); //radom i in the deck, shuffle it and take out of deck
            //swap method
            t = this.cards[mix];
            this.cards[mix] = this.cards[i];
            this.cards[i] = t;

        }
   
        return this.cards;
    }
      deal(){
        return this.cards.pop();
    }
}
class Player{
    constructor(name){
        
        this.name = name;
        this.hand = [];
    }
    //assuming that we are expecting a deck of cards //only works if we send in a deck
    takeCard(deck){
       this.hand.push(deck.deal());
       //exists as a function 
    }
    discardCard(){
       this.hand.pop();
    }
}
    




