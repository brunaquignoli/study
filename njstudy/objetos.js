const estudante = {
    nome: 'Bruna',
    idade: 19,
    cpf: '12345678901'
}

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


estudante.endereco = {rua: 'Rua feliz', N: 35, bairro: 'Centro'}; // adicionando um objeto
// dá também pra criar um objeto const vazio e ir atribuindo coisas depois!

//dá pra apagar de duas maneiras
// delete estudante.nome;
// delete estudante['nome'];
// estudante.nome = 'Bruna';
console.log(estudante);

// const deleteInfo = delete estudante['_'];