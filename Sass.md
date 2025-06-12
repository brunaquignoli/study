O SASS (Syntactically Awesome Style Sheets ou Folhas de Estilo Sintaticamente Incríveis, em português), é um pré-processador CSS. Isso significa que tudo que você escreve com SASS será convertido em CSS para ser entendido pelo navegador.

Mas não se engane, não estamos trocando seis por meia dúzia. O SASS permite usar recursos como: aninhamentos, mixins e funções para criar estilos de forma mais limpa, rápida e com mais aproveitamento.

Caso queira saber mais sobre essas funcionalidades, você pode acessar a documentação.

O SASS pode ser escrito de duas maneiras. A mais comum é usando a sintaxe SCSS, os arquivos que usam essa sintaxe, possuem extensão ".scss" e a maneira de escrever os estilos é muito parecida com o CSS puro e por isso é mais popular.

Para exemplificar podemos pensar na estilização de um botão:

/* SCSS */
button {
    padding: 3px 10px;
    background-color:blue;
    border:none;
    border-radius: 3px;
    &:hover {
        background-color:red;
    }
}
A segunda forma é usando a sintaxe SASS. Os arquivos com essa sintaxe, possuem extensão ".sass" e não usam chaves ({}) ou ponto e vírgula (;), mas apenas indentação, deixando o código mais limpo.

O mesmo código para estilizar o botão ficaria assim em SASS:

/* SASS */
button
    padding: 3px 10px;
    background-color:blue;
    border:none;
    border-radius: 3px;
    &:hover
        border: none
Independente da sintaxe que você escolha SASS, ou SCSS, ambas vão levar a um mesmo resultado, alterando o espaçamento interno, definindo a cor de fundo do botão como azul, removendo as bordas, arredondando os cantos e ao ser clicado a cor de fundo muda para vermelho.

Como usar o SASS em alguns frameworks e bibliotecas
Antes de partir para a ação e mostrar como usar o SASS em diferentes frameworks e bibliotecas, vamos decidir qual das duas sintaxes vamos aplicar nos exemplos.

Por ser parecida com CSS, a sintaxe SCSS é uma ótima opção, pois é mais familiar, e facilita o aprendizado e a compreensão do código.

Outro ponto importante, é que precisamos instalar as bibliotecas, os frameworks e até mesmo o próprio SASS. Para isso, é necessário ter o node.js instalado no computador.

Não se preocupe se você nunca teve contato com node, com este artigo você aprenderá o que precisa saber e como instalar o Node no seu computador, seguindo um passo a passo super simples.

Agora estamos prontos para ver como usar o SASS em cada um dos frameworks e bibliotecas que iremos explorar. Então vem comigo ver essa aplicação na prática.

React
Além do CSS convencional e do Styled Component do React, podemos usar o SASS para estilizar os componentes.

E para entender melhor como criar estilos com SASS vamos escrever um componente de botão que será aplicado em três situações: uma principal, uma secundária e em um alerta.

Inicialmente precisamos ter um projeto em React, que pode ser construído com a ajuda do Vite