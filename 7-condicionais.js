console.log('Trabalhando com condicionais');


const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',

);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

if (
    idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Não é maior de idade  e não vender");

}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);

//console.log(idadeComprador > 18);
//console.log(idadeComprador < 18);
//console.log(idadeComprador <= 18);
//console.log(idadeComprador >= 18);
//console.log(idadeComprador == 18);