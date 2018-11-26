// Il software deve chiedere all’utente il nome e sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso

var nome = prompt('Inserire il proprio nome');
var sesso = prompt('Inserisci M se sei maschio mentre F se sei Femmina');
var utente = document.getElementById('fm');
utente.innerHTML = "Ciao " + nome;
console.log(nome);
if (sesso == 'm'){
  fm.style.color= 'blue';
}
if (sesso == 'f'){
  fm.style.color= 'pink';
}
