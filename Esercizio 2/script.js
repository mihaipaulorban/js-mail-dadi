// Genero un numero random da 1 a 6 per il giocatore
var punteggioGiocatore = Math.floor(Math.random() * 6) + 1;

// Genero un numero random da 1 a 6 per il computer
var punteggioComputer = Math.floor(Math.random() * 6) + 1;

// Stabilisco il vincitore in base al punteggio più alto
var messaggioRisultato;
if (punteggioGiocatore > punteggioComputer) {
  messaggioRisultato = "Hai vinto! 🎉";
} else if (punteggioComputer > punteggioGiocatore) {
  messaggioRisultato = "Il computer ha vinto. 😢";
} else {
  messaggioRisultato = "È un pareggio!";
}

// Stampo il risultato in console
console.log("Il punteggio del giocatore è: " + punteggioGiocatore);
console.log("Il punteggio del computer è: " + punteggioComputer);
console.log(messaggioRisultato);
