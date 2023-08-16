var validacao = document.querySelector("#msgValidacao");
var campoNome = document.querySelector("#nome");
var campoIdade = document.querySelector("#idade");

function validarNome() {
    if (campoNome.value.length == 0) {
        validacao.textContent = "Você não preencheu o campo nome";
    } else {
        validacao.textContent = " ";
    }
};

function validarIdade() {
    if (campoIdade.value.length == 0) {
        validacao.textContent = "Não esqueça de colocar seu email. Ele é muito importante"
} else {
        validacao.textContent = " ";
    }
};