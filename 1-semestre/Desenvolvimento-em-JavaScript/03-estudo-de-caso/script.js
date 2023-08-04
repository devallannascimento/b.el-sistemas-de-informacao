let total_entrevistas = 0;
const maximo_entrevista = 15;
const inicio = 9;
const saida = 17;

/*
for(início; condição de parada; passo){
    // comandos que serão repetidos
}*/

for (i = inicio; i < saida; i++) {
    if ((i == 12) || (i == 13)) {
        continue
    }
    for (j = 0; j < 60; j = j + maximo_entrevista) {
        total_entrevistas++;
        if (j == 0) {
            console.log("Entrevista #", total_entrevistas, "=>", i + ":" + j + "0")
        }
        else {
            console.log("Entrevista #", total_entrevistas, "=>", i + ":" + j)
        }
    }
}

console.log("")
console.log("O total de entrevistas no dia será de:" , total_entrevistas)