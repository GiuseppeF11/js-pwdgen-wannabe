//Prompt login
const nome = prompt('Inserisci il tuo nome');

console.log(nome);

const cognome = prompt('Inserisci il tuo cognome');

console.log(cognome);

const colorePreferito = prompt('Inserisci il tuo colore preferito');

console.log(colorePreferito);

const numeroClasse = prompt('Inserisci il numero della tua classe');

console.log(numeroClasse);

/* La variabile recupera i tag del HTML tramite l'id 
e ne SOVRASCRIVE il contenuto tramite inner.HTML*/

let myName = document.getElementById('nomecognome').innerHTML = 'Benvenuto '+ nome + cognome;

let myColor = document.getElementById('colore').innerHTML = 'che ama il ' + colorePreferito;

let myClass = document.getElementById('classe').innerHTML = 'della classe #' + numeroClasse + ' sempre al top';

const myVar = document.getElementById('testo');

