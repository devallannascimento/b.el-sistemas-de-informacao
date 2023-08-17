var letraA = document.querySelector("#letraA");
var letraB = document.querySelector("#letraB");
var letraC = document.querySelector("#letraC");
var letraD = document.querySelector("#letraD");
var letraE = document.querySelector("#letraE");
var letraF = document.querySelector("#letraF");

var tabela = document.querySelector("#tabela");

tabela.addEventListener("click", function(event) {
    
    if(event.target.id == "A") {
        letraA.focus();
    }

    if(event.target.id == "B") {
        letraB.focus();
    }

    if(event.target.id == "C") {
        letraC.focus();
    }

    if(event.target.id == "D") {
        letraD.focus();
    }

    if(event.target.id == "E") {
        letraE.focus();
    }

    if(event.target.id == "F") {
        letraF.focus();
    }

    setTimeout(function() {

        event.target.remove();

    },"500");

});
