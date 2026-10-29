Capitolo 1

Cos'è il localStorage
Il localStorage è uno spazio del browser dove salvare dati. I dati restano anche dopo aver chiuso la pagina e rimangono lì finché non vengono cancellati.

Funziona con coppie chiave-valore: la chiave è il nome del dato, il valore è il dato. Nel localStorage puoi salvare solo stringhe. Per salvare numeri, booleani, oggetti o array, devi prima trasformarli in testo. Quando li leggi, li riconverti.

Attenzione: l'utente può vedere e modificare i dati del localStorage dal pannello DevTools del browser, nella scheda Application. Chiunque può aprirlo e leggere, cambiare o cancellare i valori salvati.

Per questo salva solo informazioni non sensibili: preferenze (tema grafico, lingua, dimensione del testo), l'ultima pagina visitata o impostazioni dell'interfaccia. Non salvare mai password, token di autenticazione (codici che dimostrano chi sei) o dati personali riservati.

Capitolo 2

setItem
setItem() aggiunge un dato oppure aggiorna uno già esistente. Vuole sempre due argomenti: la chiave e il valore.

Con setItem() inserisci un dato nel localStorage. Se la chiave esiste già, il valore vecchio viene sostituito da quello nuovo.

Lo usi per salvare una scelta dell'utente, come una preferenza grafica o la lingua.

Esempio
localStorage.setItem("tema", "scuro");
localStorage.setItem("lingua", "it");

Esercizio
Salva nel localStorage due preferenze: il volume dell'audio impostato a 80 e le notifiche impostate su attive.

Capitolo 3

getItem
getItem() legge il valore associato a una chiave. Se la chiave non esiste, restituisce null.

getItem() recupera un dato salvato in precedenza. Lo usi per riutilizzare un'informazione già salvata, per esempio per mostrarla a schermo o per fare un controllo.

Il valore restituito è sempre una stringa o null. Se ti serve un numero, devi convertirlo con Number() prima di usarlo in un calcolo.

Esempio
localStorage.setItem("lingua", "it");
const lingua = localStorage.getItem("lingua");
console.log(lingua);

Esercizio
Salva nel localStorage il tema preferito come chiaro, poi recuperalo in una variabile chiamata temaAttivo e stampala in console.


Capitolo 4

removeItem
removeItem() elimina solo una chiave specifica dal localStorage.

Usa removeItem() per cancellare un solo dato. Indichi la chiave e il browser elimina solo quella coppia chiave-valore. Il resto resta com'è.

Serve quando l'utente vuole annullare una scelta, resettare una preferenza o eliminare un'informazione che non serve più.

Esempio
localStorage.setItem("tema", "scuro");
localStorage.removeItem("tema");

Esercizio
Salva nel localStorage tre chiavi: lingua, volume e notifiche. Poi elimina solo la chiave volume.


Capitolo 5

clear
clear() svuota completamente il localStorage del sito.

clear() cancella tutti i dati salvati nel localStorage. Usalo con attenzione: rimuove ogni chiave, non solo una.

Serve per ripartire da zero, per esempio al logout o con un pulsante che elimina tutte le preferenze salvate.

Esempio
localStorage.setItem("tema", "scuro");
localStorage.setItem("lingua", "it");
localStorage.clear();

Esercizio
Salva nel localStorage la preferenza di colore e il nome utente, poi simula un reset completo dell'applicazione svuotando tutta la memoria.


Capitolo 6

JSON.stringify
JSON.stringify() trasforma un oggetto o un array in una stringa testuale in formato JSON.

JSON è un formato standard per scrivere dati strutturati sotto forma di testo. Il localStorage accetta solo stringhe, quindi per salvare oggetti e array devi passare da JSON.stringify(). Il risultato è una stringa leggibile, che puoi poi riconvertire.

Gli passi come argomento il dato da trasformare. Il valore originale non cambia: viene creata una nuova stringa.

Esempio
const studente = {
    nome: "Luca",
    eta: 16
};

const studenteJSON = JSON.stringify(studente);
console.log(studenteJSON);
// risultato: '{"nome":"Luca","eta":16}'

const corsi = ["HTML", "CSS", "JavaScript"];
const corsiJSON = JSON.stringify(corsi);
console.log(corsiJSON);
// risultato: '["HTML","CSS","JavaScript"]'


Esercizio
Crea un oggetto prodotto con le proprietà nome e prezzo, trasformalo in una stringa JSON e stampala in console.


Capitolo 7

JSON.parse
JSON.parse() trasforma una stringa JSON in un oggetto o in un array.

Se leggi dal localStorage un valore salvato con JSON.stringify(), ottieni una stringa. Con JSON.parse() la riconverti nel tipo originale. Così puoi di nuovo leggere le proprietà dell'oggetto o gli elementi dell'array.

I due metodi vanno in coppia: JSON.stringify() prima di salvare, JSON.parse() dopo aver letto.

Esempio
const studenteJSON = '{"nome":"Luca","eta":16}';
const studente = JSON.parse(studenteJSON);
console.log(studente.nome);
// risultato: Luca

const corsiJSON = '["HTML","CSS","JavaScript"]';
const corsi = JSON.parse(corsiJSON);
console.log(corsi[0]);
// risultato: HTML

Esercizio
Data la stringa '{"nome":"Tastiera","prezzo":49}', riconvertila in un oggetto e stampa in console il valore della proprietà prezzo.


Capitolo 8

Oggetti e array nel localStorage
Oggetti e array si salvano nel localStorage con JSON.stringify() e si recuperano con JSON.parse().

Un oggetto o un array non si può salvare direttamente nel localStorage, perché accetta solo stringhe. Questi sono i passi:

trasforma il dato con JSON.stringify();
salvalo con setItem();
leggilo con getItem();
riconvertilo con JSON.parse().
Serve per salvare dati più ricchi, come i prodotti nel carrello di un e-commerce, le impostazioni di un'interfaccia o un elenco di voci scelte dall'utente.

Esempio
const studente = {
    nome: "Luca",
    eta: 16
};

const listaCorsi = ["HTML", "CSS", "JavaScript"];

localStorage.setItem("studente", JSON.stringify(studente));
localStorage.setItem("corsi", JSON.stringify(listaCorsi));

const studenteSalvato = JSON.parse(localStorage.getItem("studente"));
const corsiSalvati = JSON.parse(localStorage.getItem("corsi"));

console.log(studenteSalvato);
console.log(corsiSalvati);

Esercizio
Salva nel localStorage un oggetto che rappresenta un prodotto nel carrello (nome e quantità) e un array con tre categorie della tienda. Poi recuperali entrambi e stampali in console.


Esercizio finale
Simula il salvataggio delle preferenze di un utente e del suo carrello. Salva una preferenza semplice (lingua), un oggetto con i dati di un prodotto nel carrello e un array con le categorie visitate. Poi recupera tutti i dati, riconvertili nei tipi originali e infine elimina solo la chiave della lingua.

