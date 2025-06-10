### Voltar para o [README.md](./README.md)

# outros assuntos relevantes: [JavaScript](./javascript.md)

Sobre JavaScript e Nodejs: Node.js é um ambiente que permite executar JavaScript fora do navegador. Ele usa o mesmo motor de interpretação do Chrome, mas com funcionalidades diferentes, focadas no back-end.

Suporte a bibliotecas e frameworks variados, uso do NPM para gerenciamento de pacotes, arquitetura baseada em eventos e assíncrona, popular para construção de servidores web e APIs.
Temos também o **deno**, que foi criado para abordar algumas limitações do Node.js, com foco em segurança e desenvolvimento moderno. E o **bun** que fornece ferramentas e recursos para otimizar e agilizar o desenvolvimento de aplicativos JavaScript e foi projetado para ser compatível com ecossistemas JavaScript existentes.

Ao usar const, criamos variáveis que não podem ser alteradas após a atribuição. Por exemplo, se tentarmos mudar o valor de uma variável definida como const, receberemos um erro.
Diferenças entre **var, let e const**: var é uma forma mais antiga de declarar variáveis e permite reatribuições, mas não é recomendada atualmente. let e const são preferíveis, sendo const a escolha ideal quando não precisamos mudar o valor da variável.
> A recomendação é usar const sempre que possível e let apenas quando for necessário reatribuir um valor.

**camelCase**: inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

**snake_case**: os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario. É o padrão utilizado, por exemplo, pela linguagem Python.

**kebab-case**: similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções, pois o sinal - representa um operador de subtração. Porém, pode ser utilizada para nomear arquivos, como por exemplo exercicios-variaveis.js.

**PascalCase**: similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

**.toUppserCase**: deixa tudo em maiúscula

**typeOf x**: retorna o tipo de x

**x.length**: conta o tamanho de tal elemento x

**x.pop**: exclui o ultimo elemento de uma lista

**x.toFixed(y)**: limita o tamanho de um número em y

**array.slice([inicio, fim])**: fim e inicio são opcionais, 

**x.splice(w, y, z)**: deleta numeros específicos de x, aonde w é o numero inicial, y quantos elementos vão ser deletados e z qual elemento será inserido no lugar

**x = y.concat(z)**: não altera y nem z, mas concatena os dois em x

**x = lista[y].indexOf(z)**: define que x vai ter o index de y dentro da lista z

**x.includes(y)**: retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array.

**for (let x of y)**: Funcionalidade: Percorre todos os elementos de um array, do primeiro ao último.

**x.forEach()**: É um método de array que executa uma função para cada elemento do array. Mas não retorna nada!!

**x.Map** É um método callback que itera sobre cada elemento de um array. Diferente do **forEach(), o map()** retorna um novo array com os resultados da função aplicada a cada elemento.

**x.filter()**: é um método de array que cria um novo array com todos os elementos que passam no teste implementado pela função fornecida como argumento (funciona como callback).

**x.reduce**: reduz todos os elementos de um array em um valor (no caso ele vai reduzir todos em nota, somar), acumulador é o valor que será retornado, nota
### escopo
Limite dentro do qual trabalhamos

Bloco: Variáveis declaradas dentro de um bloco (como um if, for, ou while) usando let ou const têm escopo de bloco. Elas só podem ser acessadas dentro desse bloco.
Função: Variáveis declaradas dentro de uma função têm escopo de função. Elas só podem ser acessadas dentro dessa função e não estão disponíveis fora dela.
Global: Variáveis declaradas fora de qualquer função ou bloco têm escopo global. Isso significa que elas podem ser acessadas de qualquer lugar no código, tanto dentro de funções quanto fora delas.

Number.IsNaN e IsNaN: Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN, enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser avaliado como NaN se tentar ser convertido para número.

A **desestruturação** permite atribuir diretamente os arrays a variáveis como listax e listay, que eram um lista = [listax, listay] em const [listax, listay] = lista simplificando o código e tornando-o mais fácil de entender.

**Callback** É uma função passada como argumento para forEach(). Ela recebe como parâmetro o valor do elemento atual do array.

### operadores e variáveis

Valores que são avaliados como verdadeiros incluem true, objetos vazios, arrays vazios, números diferentes de zero e strings não vazias.
Valores que são avaliados como falsos incluem false, null, undefined, zero, NaN e strings vazias.
Operador de Negação: O operador de negação é representado pelo símbolo !. Ele inverte o valor de um operando: se o operando é truthy, a negação retorna false; se é falsy, retorna true.

**Operador ===:** Compara tanto o valor quanto o tipo de dado. Por exemplo, a comparação "0" === 0 resulta em false, pois uma string não é igual a um número, mesmo que seus valores sejam equivalentes.

**Operador ==:** Compara apenas o valor, realizando conversões de tipo quando necessário. Por exemplo, "0" == 0 resulta em true, pois o JavaScript converte a string para número antes de comparar.

As **arrow functions** são uma forma moderna e mais concisa de escrever funções. Para criar uma arrow function, usamos a sintaxe const nomeDaFuncao = (parametros) => { corpo da função }. Se a função tiver apenas uma linha de código, podemos omitir as chaves e a palavra-chave return, escrevendo apenas const nomeDaFuncao = (parametros) => valorRetornado.
Sintaxe mais concisa: As arrow functions permitem uma escrita mais curta e limpa, especialmente para funções simples. Isso pode tornar o código mais legível.
Sem "this" próprio: As arrow functions não têm seu próprio contexto de this. Isso significa que, ao usar uma arrow function, o valor de this é herdado do contexto em que a função foi definida. Isso é útil em situações onde você precisa manter o contexto de this, como em métodos de objetos ou em callbacks.
Ideal para funções curtas: Se você está escrevendo uma função que realiza uma tarefa simples e não precisa de um bloco de código extenso, a arrow function é uma escolha prática.
Uso em callbacks: As arrow functions são frequentemente utilizadas em funções de retorno (callbacks) devido à sua sintaxe mais compacta, facilitando a leitura do código.

**i++** (pós-incremento): Primeiro retorna o valor atual de i e, em seguida, incrementa i.
**++i** (pré-incremento): Primeiro incrementa i e, em seguida, retorna o novo valor de i.

**spread operator**: espalha valores, formato alteraArray(arrayOriginal) por alteraArray([...arrayOriginal])

O loop **for...in** permite iterar sobre todas as propriedades de um objeto.A sintaxe é: **for (let chave in objeto) { ... }**, onde chave é uma variável que recebe o nome de cada propriedade do objeto a cada iteração.

# Objetos
objetos em nodejS são declarados como 
const objeto = {
    chave: valor, 
    chave2: valor2
} 
