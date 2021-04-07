// popolo un array con 5 numeri random e li stampo in alert

var difficulty = 5
var numberList = randomNumbersGen(1, 100, difficulty);

alert(numberList);



// console.log(numberList)


//========
//dopo 30 secondi
//========

setTimeout(function() {
    // chiedo all'utente di inserire un numero in prompt 5 volte
    var correctNumbers = [];
    for (var i = 0; i < difficulty; i++){
        var thisNumeroUtente = parseInt(prompt("inserisci un numero che ricordi"));

        // ogni numero utente va confrontato con l'array di numeri random
        //se e' presente, salvo il numero in un array "numeritrovati"
        if (numberList.includes(thisNumeroUtente) && correctNumbers.includes(thisNumeroUtente) == 0 ){
            correctNumbers.push(thisNumeroUtente);
        }
    }
    
    // stampo l'array e la sua lunghezza
    alert("hai ricordato " + correctNumbers.length + " numeri: " + correctNumbers)
}, 30000);


// ============
// FUNCTIONS 
// ============
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function randomNumbersGen(min, max, amount){
    var rndList = []
    while ( rndList.length < amount ){
        var rndNumber = getRndInteger(min, max);
    
        if (rndList.includes(rndNumber) == false){
            rndList.push(rndNumber);
        }
    }

    return rndList;
}