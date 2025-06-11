// const estudante = require('./estudante.json');

// // console.log(estudante);
// // console.log(typeof estudante);

// const chaves = Object.keys(estudante);
// console.log(chaves);


// -----

// const stringEstudante = JSON.stringify(estudante);
// // console.log(stringEstudante.nome) NÃO FUNCIONA, tem que ser:
// const objEstudante = JSON.parse(stringEstudante); // transformou em objeto! até o typeof virou objeto

// console.log(objEstudante);
// console.log(typeof objEstudante);
// console.log(objEstudante.nome); // agora aparece

// -----

// const estudantes = require('./estudantes.json');

// function buscaInformação(lista, chave, valor) {
//     return lista.find((estudante) => estudante[chave].includes(valor)); // find retorna apenas a primeira ocorrencia encontrada, caso contrario retorna undefined
// }

// const estudanteEncontrado = buscaInformação(estudantes, 'nome', 'Juliet');
// console.log(estudanteEncontrado);

// const telefoneEstudante = buscaInformação(estudantes, 'telefone', '7919437785');
// console.log(telefoneEstudante);

// -----

// const estudantes = require('./estudantes.json');

// function filtrarPorPropriedade(lista, propriedade) {
//     return lista.filter((estudante) => {
//         return estudante.endereco.hasOwnProperty(propriedade);// verifica se tem a propriedade pedida na função
//     })
// }

// const listaEnderecosIncompletos = filtrarPorPropriedade(estudantes, 'cep');
// console.log(listaEnderecosIncompletos);

// -----

const estudantes = require('./estudantes.json');

function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

const listaOrdena = ordena(estudantes, 'nome');
console.log(listaOrdena); // trouxe tudo em ordem alfabética
// sort de array, nao funciona pra valores numericos e tal
