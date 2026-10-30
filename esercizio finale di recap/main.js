// Esercizio finale

// Simula il salvataggio delle preferenze di un utente e del suo carrello.
// Salva una preferenza semplice (lingua),
// un oggetto con i dati di un prodotto nel carrello
// e un array con le categorie visitate.
// Poi recupera tutti i dati, riconvertili nei tipi originali 
// e infine elimina solo la chiave della lingua.

localStorage.setItem("lingua", "it");

const prodotto = {
    nome: "Cuffie",
    quantita: 2
};

const categorieVisitate = ["Elettronica", "Accessori", "Audio"];

localStorage.setItem("prodotto", JSON.stringify(prodotto));
localStorage.setItem("categorie", JSON.stringify(categorieVisitate));

const lingua = localStorage.getItem("lingua");
const prodottoSalvato = JSON.parse(localStorage.getItem("prodotto"));
const categorieSalvate = JSON.parse(localStorage.getItem("categorie"));

console.log(lingua);
console.log(prodottoSalvato);
console.log(categorieSalvate);

localStorage.removeItem("lingua");