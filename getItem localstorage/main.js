

//Esempio
//localStorage.setItem("lingua", "it");
//const lingua = localStorage.getItem("lingua");
//console.log(lingua);

//Esercizio
//Salva nel localStorage il tema preferito come chiaro, 
//poi recuperalo in una variabile chiamata temaAttivo e stampala in console.

localStorage.setItem("tema", "chiaro");
const temaAttivo = localStorage.getItem("tema");
console.log(temaAttivo);