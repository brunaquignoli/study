// const notas = [10, 6, 8, 5.5, 10];
// notas.pop();
// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// console.log(media.toFixed(2));
// -----

// const listaEstudantes = ['João', 'Ana', 'Caio', 'Lorena', 'Renan', 'Camila', 'Diego', 'Leticia', 'Gabriel', 'Marcelo', 'Pamela', 'Carla', 'Thiago', 'Rafaela', 'Laura'];

// const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
// const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

// console.log(sala1);
// console.log(sala2);
// divide a lista no meio

// ------

// listaEstudantes.splice(1, 2, 'Rodrigo'); // numero inicial, quantos elementos vão ser deletados, qual vai ser incluido
// console.log(listaEstudantes);

// -----
// const salaJS = ['Evaldo', 'Camis', 'Mari'];
// const salaPython = ['Ju', 'Leo', 'Raquel'];

// const salasUnificadas = salaJS.concat(salaPython);
// console.log(salasUnificadas);
// -----

// const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
// const medias = [10, 8, 7.5, 9];

// const lista = [alunos, medias];
// console.log(`A aluna da posicao 2 da lista é ${lista[0][2]} e sua nota é ${lista[1][2]}`);

// -----
 
// function exibeNomeENota(aluno) {
//     if (lista[0].includes(aluno)) {
//         const [alunos, medias] = lista;
//         const indice = alunos.indexOf(aluno);
//         const mediaAluno = medias[indice];
//         console.log(`${aluno} tem a media ${mediaAluno}`);
//     } else { 
//         console.log("Aluno não encontrado");
//     }
// }

// exibeNomeENota('Juliana')
// exibeNomeENota('Raiane')
// -----

// const notas = [10, 6.5, 8, 7.5];

// primeira expressão: executada apenas uma vez, iniciando uma variável
// segunda expressão: condição de execução, vai continuar executando até isso ser true
// terceira expressão: no final de tudo, vai executar e ir adicionando, pra em algum momento o indice chegar no tanto de notas

// for (let indice = 0; indice < notas.length; indice++) {
//     console.log(indice, notas[indice]);
// }
// -----

// const notas = [10, 6.5, 8, 7.5];
// let somaDasNotas = 0;

// for (let i = 0; i < notas.length; i++) {
//     somaDasNotas += notas[1] // vai adicionar uma das notas existente em somaDasNotas até que 1 bata o indice!!
// }

// const media = somaDasNotas / notas.length;
// console.log(`a media das notas é ${media}`);
// -----

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let nota of notas) {
//     somaDasNotas += nota
// }

// const media = somaDasNotas / notas.length;

// console.log(`a media das notas é ${media}`);
// -----

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(somaNotas);

function somaNotas (nota){
    somaDasNotas += nota
}

const media = somaDasNotas / notas.length;
console.log(`a media das notas é ${media}`)