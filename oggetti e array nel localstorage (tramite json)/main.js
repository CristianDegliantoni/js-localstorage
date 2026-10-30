
//Esempio
// const studente = {
//     nome: "Luca",
//     eta: 16
// };

// const listaCorsi = ["HTML", "CSS", "JavaScript"];

// localStorage.setItem("studente", JSON.stringify(studente));
// localStorage.setItem("corsi", JSON.stringify(listaCorsi));

// const studenteSalvato = JSON.parse(localStorage.getItem("studente"));
// const corsiSalvati = JSON.parse(localStorage.getItem("corsi"));

// console.log(studenteSalvato);
// console.log(corsiSalvati);

//**********************************************************/

// Esercizio
// Salva nel localStorage un oggetto 
// che rappresenta un prodotto nel carrello (nome e quantità)
//  e un array con tre categorie della tienda.
//   Poi recuperali entrambi e stampali in console.

const prodotto = {
    nome: "Monitor",
    quantita: 1
};

const categorie = ["Elettronica", "Accessori", "Software"];

localStorage.setItem("prodotto", JSON.stringify(prodotto));
localStorage.setItem("categorie", JSON.stringify(categorie));

const prodottoSalvato = JSON.parse(localStorage.getItem("prodotto"));
const categorieSalvate = JSON.parse(localStorage.getItem("categorie"));

console.log(prodottoSalvato);
console.log(categorieSalvate);


