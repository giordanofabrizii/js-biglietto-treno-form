const costoAlKm = 0.267113; // euro al km

const bigliettoDiv = document.getElementById("biglietto");
const scontatoDiv = document.getElementById("scontato");

const sendButtonEl = document.getElementById("invia");
const kmInputEl = document.getElementById("kmInput");
const etaInputEl = document.getElementById("etaInput");
const kmOutputEl = document.getElementById("kmOutput");
const etaOutputEl = document.getElementById("etaOutput");
const costoOutputEl = document.getElementById("costoOutput");
const scontoOutputEl = document.getElementById("scontoOutput");
const scontatoOutputEl = document.getElementById("prezzoScontatoOutput");

let scontoUtente = false;
let percentualeSconto;

sendButtonEl.addEventListener("click", function(){    
    // reset



    let kmUtente = kmInputEl.value;
    let etaUtente = etaInputEl.value;
    
    // calcolo il costo dello biglietto
    let prezzo = kmUtente * costoAlKm;

    costoOutputEl.append(prezzo.toFixed(2));

    // sconto il biglietto
    if (etaUtente < 21) {
        prezzo *= (1.0 - 0.24552);
        scontoUtente = true;
        percentualeSconto = '24.552%'
    } else if (etaUtente >= 63) {
        prezzo *= (1.0 - 0.37893);
        scontoUtente = true;
        percentualeSconto = '37.893%'
    }

    kmOutputEl.innerHTML = (kmUtente);
    etaOutputEl.innerHTML = (etaUtente);
    scontoOutputEl.innerHTML = (percentualeSconto);
    scontatoOutputEl.innerHTML = (prezzo.toFixed(2));

    bigliettoDiv.style.display = "block";

    if (scontoUtente) {
        scontatoDiv.style.display = "block";
    }
});