let data = new Date();
let dia = data.getDate();
let mes = data.getMonth()+1; 
let ano = data.getFullYear();

console.log(data, dia, mes, ano);

const outono = 3;
const inverno = 6;
const primavera = 9;
const verao = 12;

var cor; 

if((mes >= outono) && (mes < inverno)){
    cor = "##c0dd5d";
}
else if((mes >= inverno) && (mes < primavera)){
    cor = ("#9dbce3")
}
else if((mes >= primavera) && (mes < verao)){
    cor = "#ffd6ef";
}
else if(((mes >= 1) && (mes < outono)) || (mes == 12)){
    cor = "#fdf080";
}

document.body.style.backgroundColor = cor;