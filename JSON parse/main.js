

// Esempio
// const studenteJSON = '{"nome":"Luca","eta":16}';
// const studente = JSON.parse(studenteJSON);
// console.log(studente.nome);
// risultato: Luca

// const corsiJSON = '["HTML","CSS","JavaScript"]';
// const corsi = JSON.parse(corsiJSON);
// console.log(corsi[0]);
// risultato: HTML

// Esercizio
// Data la stringa '{"nome":"Tastiera","prezzo":49}', 
// riconvertila in un oggetto e stampa in console il valore della proprietà prezzo.

const prodottoJSON = '{"nome":"tastiera","prezzo":49}';
const prodotto = JSON.parse(prodottoJSON);
console.log(prodotto.prezzo);

