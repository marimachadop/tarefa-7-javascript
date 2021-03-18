// alert('Mensagem do arquivo index.js');

const nome1 = prompt('Usuário 1: Informe seu nome');
console.log('Nome do usuário 1: ' + nome1);

const peso1 = prompt('Usuário 1: Informe seu peso');
console.log('Peso do usuário 1: ' + peso1);

const altura1 = prompt('Usuário 1: Informe sua altura');
console.log('Altura do usuário 1: ' + altura1);

const imc1 = parseFloat(peso1) / (parseFloat(altura1) * parseFloat(altura1));
console.log('IMC do usuário 1: ' + imc1);

const nome2 = prompt('Usuário 2: Informe seu nome');
console.log('Nome do usuário 2: ' + nome2);

const peso2 = prompt('Usuário 2: Informe seu peso');
console.log('Peso do usuário 2: ' + peso2);

const altura2 = prompt('Usuário 2: Informe sua altura');
console.log('Altura do usuário 2: ' + altura2);

const imc2 = parseFloat(peso2) / (parseFloat(altura2) * parseFloat(altura2));
console.log('IMC do usuário 2: ' + imc2);

if (imc1 > imc2) {
    console.log(`O IMC de ${nome1} (${imc1}) é maior que o de ${nome2} (${imc2}).`)
} else if (imc2 > imc1) {
    console.log(`O IMC de ${nome2} (${imc2}) é maior que o de ${nome1} (${imc1}).`)
} else {
    console.log(`O IMC de ${nome1} (${imc1}) é igual ao de ${nome2} (${imc2}).`)
}