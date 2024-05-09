// > Descrizione:
// >  Scrivere un programma che chieda all’utente:

//     Il numero di chilometri da percorrere
//     Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//     il prezzo del biglietto è definito in base ai km (0.267113 € al km)
//     va applicato uno sconto del 24.552% per gli under 21
//     va applicato uno sconto del 37.893% per gli over 63.

// > MILESTONE 1:
// > Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// > La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// > Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// > Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

const costoAlKm = 0.267113; // euro al km

const sendButtonEl = document.getElementById("invia");
const kmInputEl = document.getElementById("kmInput");
const etaInputEl = document.getElementById("etaInput");
const kmOutputEl = document.getElementById("kmOutput");
const etaOutputEl = document.getElementById("etaOutput");
const costoOutputEl = document.getElementById("costoOutput");

sendButtonEl.addEventListener("click", function(){
    let kmUtente = kmInputEl.value ;
    let etaUtente = etaInputEl.value ;
    
    // calcolo il costo dello biglietto
    let prezzo = kmUtente * costoAlKm;

    // sconto il biglietto
    if (etaUtente < 21) {
        prezzo *= (1.0 - 0.24552);
    } else if (etaUtente >= 63) {
        prezzo *= (1.0 - 0.37893);
    }

    kmOutputEl.append(kmUtente);
    etaOutputEl.append(etaUtente);
    costoOutputEl.append(prezzo.toFixed(2));
});