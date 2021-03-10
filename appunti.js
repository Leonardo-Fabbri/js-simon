//dichiarazione di variabile
var nomeDellaVariabile;
var numero;
var numeroUtente;

//assegnazione di variabile
numero = 10 //la variabile è definita sopra
altraVariabile = 20; //la variabile non è definita sopra quindi dichiara una variabile globale

//dichiarazione e assegnazione
var string = "frase di esempio"; //questa variabile contiene una stringa

//come si definisce un array vuoto
var arrayVuoto = [];

//arrau con un a lista di elementi
var listaNumero = [1,2,3];
var listaMista = [1,"parola",[1,2,3]];

//come si legge un valore  di un elemento di un array
listaNumero[0]; //leggo la posizione 1 dell'array - MA NON HA SENSO!! dove metti il valore che hai letto?
console.log(listaNumero[0]); //così ha senso perchpè lo leggo e lo stampoi con il console log

//come si aggiunge o sovrascrive un valore dentro un array
listaNumero[0] = 2;
listaNumero[3]= 4;

//aggiungere
listaNumero.push(10);

function funzioneSenzaParametri(){

}

//per eseguire una istruzione più volte possiamo fare uso dei CICLI!!
for(var i=0;i<5;i++){
//qui vanno inserite le istruzioni che vogliamo ripetere
//in questo caso le istruzioni verranno eseguite 5 volte, perchè i assumerà i valori da 0 a 4 e la condizione di uscita dice i<5
    
}

//esempio di array randomico://
var arrayCasuale= []; 

for (var i=0; i<5; i++) { 
    /*devo mettere dentro ad arracasuale il numero casuale.*/
    arrayCasuale.push (Math.floor(Math.random()*100) + 1);
}
