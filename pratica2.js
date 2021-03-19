const nome = prompt('Usuário: Informe seu nome');
console.log('Nome do usuário: ' + nome);

const peso = prompt('Usuário: Informe seu peso');
console.log('Peso do usuário: ' + peso);

const altura = prompt('Usuário: Informe sua altura');
console.log('Altura do usuário: ' + altura);

const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
console.log('IMC do usuário: ' + imc);

if (imc < 17) {
    console.log(`${nome} você está muito abaixo do peso. Dica: Tente procurar receitas saudáveis para engordar ou um vento vai te levar para longe!`);
} else if (imc >= 17 && imc <= 18.49) {
    console.log(`${nome} você está abaixo do peso. Dica: Tente comer mais um pouco de forma saudável, não há problema em engordar um pouco mais!`);
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log(`${nome}, seu peso está dentro dos conformes. Parabéns!`);
} else if (imc >= 25 && imc <= 29.99) {
    console.log(`${nome} você está acima do peso. Dica: Tente não se empolgar muito com a comida e tudo fica bem!`);
} else if (imc >= 30 && imc <= 34.99) {
    console.log(`${nome} você está dentro da faixa Obesidade I. Dica: Está na hora de fazer alguns exercícios!`);
} else if (imc >= 35 && imc <= 39.99) {
    console.log(`${nome} você está dentro da faixa Obesidade II (severa). Dica: Repense sua dieta e mantenha uma rotina de exercícios. Você consegue!`);
} else {
    console.log(`${nome} você está dentro da faixa Obesidade III (mórbida). Dica: Procure um medico especialista para reajustar sua dieta e procure começar uma rotina de exercícios. Você consegue!`);
}