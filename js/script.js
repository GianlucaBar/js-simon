// popolo un array con 5 numeri random e li stampo in alert
var numberList = []


while ( numberList.length < 5 ){
    var rndNumber = getRndInteger(1, 100);

    if (numberList.includes(rndNumber) == false){
        numberList.push(rndNumber);
    }
}

// console.log(numberList)
//========
//dopo 30 secondi
setTimeout(function() {
    // chiedo all'utente di inserire un numero in prompt 5 volte
    var correctNumbers = [];
    for (var i = 0; i < 5; i++){
        var thisNumeroUtente = parseInt(prompt("inserisci un numero che ricordi"));
        // ogni numero utente va confrontato con l'array di numeri random
        //se e' presente, salvo il numero in un array "numeritrovati"
        if (numberList.includes(thisNumeroUtente)){
            correctNumbers.push(thisNumeroUtente);
        }
    }
    
    // stampo l'array e la sua lunghezza
    alert("hai ricordato " + correctNumbers.length + " numeri: " + correctNumbers)
}, 30000);

// ogni numero utente va confrontato con l'array di numeri random
//se e' presente, salvo il numero in un array "numeritrovati"

// stampo l'array e la sua lunghezza 




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }