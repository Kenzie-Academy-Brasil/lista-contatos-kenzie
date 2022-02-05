// console.log('hello world');

// Variáveis
let idade = '21';
// const nome = "Maria";

// console.log(idade);

idade = '22';

// console.log(idade);

// Tipos de dados
/*
string
- sempre entre aspas
- tudo que for um texto

number/inteiro/float
- numéros, seja inteiro ou decimal

boolean/booleano
- verdadeiro => true
- falso => false
*/

const verdadeiroFalso = 'false';

// console.log(verdadeiroFalso)

/* tipos de dados => objetos */

// array => listas

// const nome1 = "Maria";
// const nome2 = "Manu";
// const nome3 = "Hudson";
// const nome4 = "Vitor";

// console.log(nome1);
// console.log(nome2);
// console.log(nome3);
// console.log(nome4);

const nomes = [
    'Maria',
    21,
    'Curitiba',
    'Manu',
    20,
    'Presidente Prudente',
    'Hudson',
    'Vitor',
    'Yasmin',
    'Felipe',
];

// console.log(nomes);
// console.log(nomes[9]);

// objeto literal

const maria = {
    nome: 'Maria',
    idade: 21,
    cidade: 'Curitiba',
};
console.log(maria.idade);

const manu = {
    nome: 'Emanuela',
    idade: 20,
    cidade: 'Presidente Prudente',
};

// console.log(manu);

const pessoas = [];

// pessoas.push(maria, manu);

// console.log(pessoas);

const estouComSono = false;

// No if colocamos a condição
// Cai no else se a condição do if nao der certo

if (estouComSono === false) {
    console.log('Vou estudar');
} else {
    console.log('Vou dormir');
}

// === (estritamente igual, difere os tipos)
// == (igual)
// >=
// >
// <
// && satisfazer mais de uma condição
// || satisfazer pelo menos uma condição

if (manu.idade >= 18 && manu.cidade === 'Presidente Prudente') {
    console.log('é maior de idade e é de Prudente');
} else {
    console.log('é menor de idade');
}

if (manu.idade >= 18 || manu.cidade === 'Presidente Prudente') {
    console.log('Você passou em pelo menos uma das condições!');
} else {
    console.log('Não passou em nenhuma condição!');
}

const euEstouComSono = false;

if (!euEstouComSono) {
    console.log('Não estou com sono');
}

if (!(manu.idade < 25)) {
    console.log('é menor do que 25');
}

function darOi5Vezes(nome) {
    for (let indice = 0; indice < 5; indice++) {
        console.log('Oi' + ' ' + nome);
    }
}

darOi5Vezes('Maria');

const botao = document.getElementById('btn');
console.log(botao);

function clicouNoBotao(evento) {
    console.log(evento);
}

botao.addEventListener('click', clicouNoBotao);