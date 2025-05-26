// aprendendo js de verdade !!! finalmente
alert('bem vindo ao código de numero secreto!!!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');
    if (numeroSecreto == chute) {
        break;
        // usar crase pra concatenar
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto é menor que ${chute}`);
        } else {
        alert(`o numero secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

// tentativas é maior do que 1? caso sim, vai printar tentativas, senão, vai printar tentativa
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
/*
if (tentativas > 1) {
    alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} tentativas`);
} else { 
    alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} tentativa`);
}
    */

