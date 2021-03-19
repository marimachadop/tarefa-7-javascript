function calcularGorjeta(valores) {
    for (let index = 0; index < 3; index++) {
        if (valores[index] < 50) {
            gorjetas[index] = (valores[index] * 20) / 100;
        } else if (valores[index] >= 50 && valores[index] <= 200) {
            gorjetas[index] = (valores[index] * 15) / 100;
        } else if (valores[index] > 200) {
            gorjetas[index] = (valores[index] * 10) / 100;
        }

    }
}

function detalhamentoIndividual(nome, valor, gorjeta) {
    let total = (parseFloat(valor) + parseFloat(gorjeta));
    console.log(`Restaurante ${nome} - [Valor: R$ ${valor} | Gorjeta: R$ ${gorjeta} | Total: R$ ${total}]`);
}

function detalhamento(nomes, valores, gorjetas) {
    for (let index = 0; index < 3; index++) {
        detalhamentoIndividual(nomes[index], valores[index], gorjetas[index]);
    }
}

let nomes = new Array();
let valores = new Array();
let gorjetas = new Array();
let nome, valor;

for (let index = 0; index < 3; index++) {
    nome = prompt('Informe o nome do restaurante:');
    nomes[index] = nome;
    valor = prompt(`Conta total do ${nome}:`);
    valores[index] = valor;
}

calcularGorjeta(valores);
detalhamento(nomes, valores, gorjetas);