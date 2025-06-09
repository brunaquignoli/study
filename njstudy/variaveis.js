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

// const notas = [10, 6.5, 8, 9.5];

// let somaDasNotas = 0;

// notas.forEach(somaNotas);

// function somaNotas (nota){
//     somaDasNotas += nota;
// }

// const media = somaDasNotas / notas.length;
// console.log(`a media das notas é ${media}`);
// -----

// const notas = [10, 9.5, 8, 7, 6];


// // const notasAtualizadas = notas.map(function (nota) {
// //     return nota + 1;
// // })
// //  podemos simplicar essa função com um arrow function, ja que o map é call back ou seja tem retorno 
// const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1); // pega nota e faz mais um, se for maior do que 10 retorna 10, se nao, retorna nota + 1 mesmo. verficia algo ? true : false

// console.log(notasAtualizadas)
//  -----

// const nomes = ['Ana Julia', "Caio Vinicius", "BIA Silva"];

// const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
// const nomesDiferentes = nomes.map((nome) => nome.toLowerCase());

// console.log(nomesPadronizados);
// console.log(nomesDiferentes);

// -----

// const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
// const medias = [7, 4.5, 8, 7.5];

// const aprovados = alunos.filter((_, indice) => { // (dado alterado, no caso o _ tá pulando um parametro pois nao está sendo utilizado, indice iterado)
//     return medias[indice] > 6;
// })

// console.log(aprovados);
// -----

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(listaDeNotas){ 
//         const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
//     // const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => { 
//     //     return acumulador + nota;
//     // }, 0); // passa a função interna e o valor inicial que vai ser acumulado

//     const media = somaDasNotas / listaDeNotas.length;
//     return media
// }

// console.log(calculaMedia(salaJS));
// console.log(calculaMedia(salaJava));
// console.log(calculaMedia(salaPython));
// -----

// const notas = [7, 7, 8, 9];
// const novaListaDeNotas = [...notas, 10];

// // spread operator: espalha valores


// // let nota = 9.75;
// // let novaNota= nota;

// // nota = 10;

// console.log(notas);
// console.log(novaListaDeNotas);
// -----

const nomes = ['João', 'João', 'Maria', 'Pedro', 'Ana', 'Luana', 'João', 'Mariana', 'Pedro', 'Nayara', 'Lissa'];

// const nomesAtualizados = new Set(nomes); // set é um conjunto que guarda valores únicos, é tipo um array mas não é, então os métodos de array não funcionam

const listaNomesAtualizados = [... new Set(nomes)];

console.log(listaNomesAtualizados);


