//Prompt login
const nome = prompt('Inserisci il tuo nome');

console.log(nome);

const cognome = prompt('Inserisci il tuo cognome');

console.log(cognome);

const colorePreferito = prompt('Inserisci il tuo colore preferito');

console.log(colorePreferito);

const numeroClasse = prompt('Inserisci il numero della tua classe');

console.log(numeroClasse);

const myVar = document.getElementById('testo');

let myName = document.getElementById('nome+cognome').innerHTML = 'Benvenuto '+ nome + cognome;

let myColor = document.getElementById('colore').innerHTML = 'che ama il ' + colorePreferito;

let myClass = document.getElementById('classe').innerHTML = 'della classe #' + numeroClasse + ' sempre al top';

