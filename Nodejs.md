### Voltar para o [README.md](./README.md)

# outros assuntos relevantes: [JavaScript](./javascript.md)

Sobre JavaScript e Nodejs: Node.js é um ambiente que permite executar JavaScript fora do navegador. Ele usa o mesmo motor de interpretação do Chrome, mas com funcionalidades diferentes, focadas no back-end.

Suporte a bibliotecas e frameworks variados, uso do NPM para gerenciamento de pacotes, arquitetura baseada em eventos e assíncrona, popular para construção de servidores web e APIs.
Temos também o **deno**, que foi criado para abordar algumas limitações do Node.js, com foco em segurança e desenvolvimento moderno. E o **bun** que fornece ferramentas e recursos para otimizar e agilizar o desenvolvimento de aplicativos JavaScript e foi projetado para ser compatível com ecossistemas JavaScript existentes.

Ao usar const, criamos variáveis que não podem ser alteradas após a atribuição. Por exemplo, se tentarmos mudar o valor de uma variável definida como const, receberemos um erro.
Diferenças entre var, let e const: var é uma forma mais antiga de declarar variáveis e permite reatribuições, mas não é recomendada atualmente. let e const são preferíveis, sendo const a escolha ideal quando não precisamos mudar o valor da variável.
> A recomendação é usar const sempre que possível e let apenas quando for necessário reatribuir um valor.

**camelCase**: inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

**snake_case**: os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario. É o padrão utilizado, por exemplo, pela linguagem Python.

**kebab-case**: similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções, pois o sinal - representa um operador de subtração. Porém, pode ser utilizada para nomear arquivos, como por exemplo exercicios-variaveis.js.

**PascalCase**: similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

**.toUppserCase**: deixa tudo em maiúscula

**typeOf x**: retorna o tipo de x

### escopo
Limite dentro do qual trabalhamos

Bloco: Variáveis declaradas dentro de um bloco (como um if, for, ou while) usando let ou const têm escopo de bloco. Elas só podem ser acessadas dentro desse bloco.
Função: Variáveis declaradas dentro de uma função têm escopo de função. Elas só podem ser acessadas dentro dessa função e não estão disponíveis fora dela.
Global: Variáveis declaradas fora de qualquer função ou bloco têm escopo global. Isso significa que elas podem ser acessadas de qualquer lugar no código, tanto dentro de funções quanto fora delas.

Number.IsNaN e IsNaN: Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN, enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser avaliado como NaN se tentar ser convertido para número.

