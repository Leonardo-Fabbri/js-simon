var arrayCasuale= []; 
var sec= 10; /*30*/
var numUtente= [];

for (var i=0; i<5; i++) { 
    /*devo mettere dentro ad arracasuale il numero casuale.*/
    arrayCasuale.push (Math.floor(Math.random()*100) + 1);
}


console.log (arrayCasuale);
alert(arrayCasuale);

console.log(numUtente);

Interval = setInterval (function(){
    document.getElementById("secondi").innerHTML= sec;
    if (sec==0) {
        var utenteuno=prompt("Inserire primo numero");
        numUtente.push(utenteuno);
        
        var utentedue=prompt("Inserire secondo numero");
        numUtente.push(utentedue);

        var utentetre=prompt("Inserire terzo numero");
        numUtente.push(utentetre);

        var utentequattro=prompt("Inserire quarto numero");
        numUtente.push(utentequattro);

        
        var utentecinque=prompt("Inserire quinto numero");
        numUtente.push(utentecinque);

        clearInterval(Interval);



    }else {
        sec--;
    }


}, 1000);

