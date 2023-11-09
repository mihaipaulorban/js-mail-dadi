// Chiedo all'utente la mail
var emailUtente = prompt("Inserisci la tua email:");

// Lista di chi può accedere
var listaAccesso = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com"];

// Controllo se la mail è nella lista
var accessoConsentito = false;
for (var i = 0; i < listaAccesso.length; i++) {
  if (emailUtente === listaAccesso[i]) {
    accessoConsentito = true;
    break;
  }
}

// Stampo un messaggio sull'esito in console
if (accessoConsentito) {
  console.log("Accesso consentito. Benvenuto!");
} else {
  console.log("Accesso negato. La tua email non è autorizzata.");
}