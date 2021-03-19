function calcularIdade(idade) {
    if (idade >= 65) {
        return 0;
    } else if (idade < 65) {
        return 65 - idade;
    }
}

const nome = prompt("Informe seu nome");
const idade = prompt("Informe sua idade");
const retorno = calcularIdade(idade);

if (retorno == 0) {
    console.log(`${nome}, você já é aposentado(a)`);
} else {
    console.log(`${nome}, faltam ${retorno} anos para sua aposentadoria`);
}