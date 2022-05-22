console.log("trabalhando com listas");
const salvador = 'Salvador';
const saopaulo = 'São paulo';
const rioDejaneiro = 'Rio de janeiro';

const listaDedestinos = new Array(
    'Salvador',
    'São paulo',
    'Rio de janeiro'
);

listaDedestinos.push('Curitiba'); // adicionando um item na lista 

console.log("Destinos possiveis");
//console.log(salvador,são paulo, rio de janeiro)
console.log(listaDedestinos);

listaDedestinos.splice(1, 1);

console.log(listadedestinos[1], listadedestinos[0]);