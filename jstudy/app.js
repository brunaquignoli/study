// aprendendo js de verdade !!! finalmente

// primeira tentativa
// alert('bem vindo ao código de numero secreto!!!');
// let numeroSecreto = parseInt(Math.random() * 100 + 1);
// let chute;
// let tentativas = 1;

// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um numero entre 1 e 10');
//     if (numeroSecreto == chute) {
//         break;
//         // usar crase pra concatenar
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`o numero secreto é menor que ${chute}`);
//         } else {
//         alert(`o numero secreto é maior que ${chute}`);
//         }
//         tentativas++
//     }
// }

// // tentativas é maior do que 1? caso sim, vai printar tentativas, senão, vai printar tentativa
// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


/*
if (tentativas > 1) {
    alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} tentativas`);
} else { 
    alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} tentativa`);
}
    */

/*
document.querySelector('x') seleciona o primeiro elemento que corresponde ao seletor fornecido
x.innerHTML usada pra acessar ou modificar o conteúdo HTML de um elemento selecionado.
function x{} função em JavaScript, que é responsável por executar uma ação específica
console.log('x') imprime a mensagem ou o valor no console do navegador
 .value pega só o valor inserido, e não toda a tag
*/


/* let titulo = document.querySelector('h1'); // definiu que pede pra pegarmos algo do documento, no caso vai ser o h1, então ele delecionou o h1
 titulo.innerHTML = 'Jogo do número secreto'//innerHTML pega algo dentro do HTML

 let paragrafo = document.querySelector('p');
 paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


*/

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag){
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto 
}
// sempre que temos um padrão de código/códigos muito parecidos, a gente pode isolar isso em uma função;

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
} // trecho de código que é responsável por alguma funcionalidade específica

function gerarNumeroAleatorio(){
    return parseInt(Math.random()* 10 +1 ); // precisa do parse int porque pode vir quebrado!
}
