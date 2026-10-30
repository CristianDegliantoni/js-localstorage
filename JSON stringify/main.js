

//Esempio
// const studente = {
//     nome: "Luca",
//     eta: 16
// };

// const studenteJSON = JSON.stringify(studente);
// console.log(studenteJSON);
// risultato: '{"nome":"Luca","eta":16}'

// const corsi = ["HTML", "CSS", "JavaScript"];
// const corsiJSON = JSON.stringify(corsi);
// console.log(corsiJSON);
// risultato: '["HTML","CSS","JavaScript"]'


//Crea un oggetto prodotto con le proprietà nome e prezzo,
//  trasformalo in una stringa JSON e stampala in console.

const prodotto = {
    name: "pizza",
    prezzo: 10,
};

const prodottoJson = JSON.stringify(prodotto);
console.log(prodottoJson);

