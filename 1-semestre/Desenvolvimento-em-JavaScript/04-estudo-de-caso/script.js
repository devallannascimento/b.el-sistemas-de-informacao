const inicio = 9;
const saida = 17;
var total_entrevistas = 0;
const minutos = 15;

let entrevistados = [
    "José da Silva",
    "Antônio de Sá",
    "Felipe Augusto",
    "Carla Moreira",
    "Pedro Malta",
    "Maria Sousa",
    "Marta da Silva",
    "Fausto Augusto",
    "Silvio Sávio",
    "Maísa Silva",
    "Lucas Lopes",
    "Zenildo Santos",
    "Bruno Lucas",
    "Luana Melo",
    "Felipe Santos",
    "Flávio Miguel",
    "Lauro Maria",
    "Juca dos Santos",
    "Luciana Carla",
    "Felipe Silva",
    "André Manuel",
    "Pedro Parker",
    "Ana Maria",
    "Thiago Melo"
]

//ordendando entrevistados em ordem alfabética
entrevistados.sort();

for(i = inicio; i < saida; i++){
    if((i == 12) || (i == 13)){
        continue
    }
    for(hora = 0; hora < 60; hora = hora + minutos){
        total_entrevistas++
        if(hora == 0){
            console.log(i + ":" + hora + "0", "=>", entrevistados[total_entrevistas - 1])
        }
        else{
            console.log(i + ":" + hora, "=>", entrevistados[total_entrevistas - 1])
        }

    }
}

console.log("O total de entrevistas no dia será de:" , total_entrevistas)