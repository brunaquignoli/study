// const estudante = {
//     nome: 'Bruna',
//     idade: 19,
//     cpf: '12345678901'
// }

// console.log(`o nome da estudante é ${estudante.nome} e ela tem ${estudante.idade} anos. O começo do cpf dela é ${estudante.cpf.substring(0, 3)}`); // substring só pode ser usado com string: substring(começo, final)

// function exibeInfoEstudante(objEstudante, infoEstudante) {
//     return objEstudante[infoEstudante];
// } // outra forma de puxar algo como dado variável

// console.log(estudante['nome']); // o valor da chave fora de colchetes nao funciona!
// console.log(estudante['cpf']);

// console.log(estudante.pet);// propriedades não declaradas só saem como undefined
// console.log(estudante['pet']);
// console.log(estudante.nome);
// console.log(estudante['idade']);

// console.log(exibeInfoEstudante(estudante, 'nome'));
// console.log(exibeInfoEstudante(estudante, 'cpf'));

// adicionando uma propriedade
// estudante.telefone = '11965847216';
// console.log(estudante); // tem o telefone na saida agora

// estudante.nome = 'Ana'; // altera, também, menos se forem feitos como const


// estudante.endereco = {rua: 'Rua feliz', N: 35, bairro: 'Centro'}; // adicionando um objeto
//pra pegar um unico endereço:
// console.log(estudante.endereco);
// console.log(estudante.endereco.rua);
// dá também pra criar um objeto const vazio e ir atribuindo coisas depois!

//dá pra apagar de duas maneiras
// delete estudante.nome;
// delete estudante['nome'];
// estudante.nome = 'Bruna';
// console.log(estudante);

// const deleteInfo = delete estudante['_'];
// -----

// juntar dois valores: só deixar os dois elementos em um array e acessar ele como [0] e tal (tipo quando forem dois dados de telefone e etc)
// dados grandes podem estar em propriedade de objeto {} ou em array como lista de conjunto de textos []

// podemos também fazer uma lista de objetos pra conseguir manipular e tal: endereco: [{rua: 'Rua'}] aí conseguimos usar métodos de lista, como push e tal, filter etc e acessar como estudante.endereco[0]

const estudante = {
    nome: 'josé da Silva',
    idade: 19,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsiste: true,
    telefone: ['55119999999998', '55119999999999'],
    enderecos: [{rua: 'Rua feliz', numero: 35, complemento: 'Centro'}, {rua: 'Dona Clotilde', numero: 71, complementl: null}]// tem que fazer uma exceçao na hora do print porque imprime isso como object
    // media: 7.5,
    // estaAprovado: function(mediaBase) {
    //     return this.media >= mediaBase ? true : false
    // }
}


// console.log(estudante.estaAprovado(7));
// console.log(estudante);
// -----

// for (let chave in estudante) {
//     const tipo = typeof estudante[chave];
//     if (tipo !== "object" && tipo !== "function") {
//         const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
//         console.log(texto);
//     }
// } // imprime só as chaves, sem o acesso a elas, tipo, ao inves de vir nome: 'Bruna', só vem bruna
// -----

// chavesObjeto = Object.keys(estudante); // tem tambem o values e entries
// console.log(chavesObjeto);

// if (!chavesObjeto.includes('endereços')) {
//     console.error('é necessario ter um endereço cadastrado')
// }

// -----

// function exibirTelefones(telefone1, telefone2){
//     console.log(`Ligar para ${telefone1}`);
//     console.log(`Ligar para ${telefone2}`);
// }

// // console.log(estudantes.telefone[0], estudantes.telefone[1]); // não é boa pratica
// exibirTelefones(...estudante.telefone);

const dadosEnvio = {
    destinatario: estudante.nome,
    // rua: estudante.enderecos[0].rua,
    // numero: estudante.enderecos[0].numero,
    // complemento: estudante.enderecos[0].complemento
    // PESSIMO JEITO
    ...estudante.enderecos[0]
};

console.log(dadosEnvio);