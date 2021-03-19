const num = prompt('Informe um número');

let nomes = new Array();
let nome;

for (let index = 0; index < num; index++) {
    nome = prompt('Informe um nome:')
    nomes[index] = nome;
}

for (let index = (nomes.length - 1); index >= 0; index--) {
    console.log(`Nome: ${nomes[index]}`);
}