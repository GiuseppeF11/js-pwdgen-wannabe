/* 
    1)CHiedi all'utente il nome
    2)Chiedi all'utente il cognome
    3)Chiedi il suo colore preferito
    4)Infine scrivi sulla pagina nome cognome colore preferito e la classe

*/

//Prompt login
const nome = prompt('Inserisci il tuo nome');
console.log('nome' , nome , typeof nome);

const cognome = prompt('Inserisci il tuo cognome');
console.log('cognome' , cognome , typeof cognome);

const colorePreferito = prompt('Inserisci il tuo colore preferito');
console.log('colore' , colorePreferito , typeof colorePreferito);

const nClasse = prompt('Inserisci il numero della tua classe');
console.log('classe' , nClasse , typeof nClasse);

/* La variabile recupera i tag del HTML tramite l'id 
e ne SOVRASCRIVE il contenuto tramite inner.HTML*/

const myPass = (nome + cognome + colorePreferito + nClasse);

document.getElementById('pswContainer').innerHTML = 'Password:' + myPass;