function createDeck(){
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for(i = 0; i < types.length; i++){
        for(j = 0; j < values.length; j++){
            deck.push(values[j] + "-" + types[i]);
        }
    }
// console.log(deck);
}
function shuffleDeck() {
    for(i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
    console.log(deck); 
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
    location.reload();
});

function startGame() {
    dealersHiddenCards = deck.pop();
    dealerTotal += getDealerValue(dealersHiddenCards);
    
    
    
    
    console.log(dealersHiddenCards);
    //console.log(dealerTotal);
    //console.log(playerCards);
    //console.log(playerTotal);
    
    while (dealerTotal < 17 ) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        dealerTotal += getDealerValue(card);
        cardImg.src = "./cards/" + card + ".png";
        
        document.getElementById("dealer-cards").append(cardImg);
        
    }
    console.log(dealerTotal);
    
    // for (i = 1; i < 2; i++) {
    //     let cardImg = document.createElement("img");
    //     let card = deck.pop();
    //     playerTotal += getPlayerValue(card);
    //     cardImg.src = "./cards/" + card + ".png";
        
    //     document.getElementById("player-cards").append(cardImg);
    // }

    for (i = 0; i < 2; i++){
        playerCards = deck.pop();
        playerTotal += getPlayerValue(playerCards);
        let card = document.createElement("img");
        card.src = "./cards/" + playerCards + ".png";
        document.getElementById("player-cards").prepend(card);
        }

    console.log(playerCards);
    console.log(playerTotal);

function getDealerValue(card) {
    let cardInfo = card.split("-");
    let value = cardInfo[0];

    if(isNaN(value)){
        if(value == "A") {
            if(dealerTotal >= 11){
                return 1;
            }
            return 11;
            
        }
        return 10
    }
    return parseInt(value);
}

function getPlayerValue(card) {
    let cardInfo = card.split("-");
    let value = cardInfo[0];

    if(isNaN(value)){
        if(value == "A") {
            if(playerTotal >= 11){
                return 1;
            }
            return 11;
            
        }
        return 10
    }
    return parseInt(value);
}