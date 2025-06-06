### Voltar para o [README.md](./README.md)

**VAR** normalmente é muito utilizado para deixar um código mais limpo quando precisamos declarar uma variável, e deixamos o próprio ide decidir qual será o tipo da mesma.

Declaração de Arrays:  
Lista[] nomes = new Lista[1]
Lista nome1 = new Lista (Bruna);

--Lista nome2 = new Lista (João);
> InstaceOf: pergunta se um objeto é algo específico

>LinkedList<> e Set<>, Map<>(a,b, chave e resultado):
ArrayList
A principal característica do ArrayList é que ele é baseado em um array dinâmico. Ele armazena os elementos em uma matriz interna e, conforme novos elementos são adicionados, o tamanho da matriz é automaticamente ajustado para acomodar o novo elemento. Da mesma forma, quando um elemento é removido, o tamanho do array é ajustado para evitar o desperdício de espaço. O ArrayList é amplamente utilizado devido à sua facilidade de uso e eficiência em termos de desempenho.

LinkedList
A classe LinkedList fornece uma lista encadeada de elementos. Diferentemente do ArrayList, que é baseado em um array, o LinkedList é baseado em uma lista encadeada, o que significa que cada elemento da lista é um objeto que contém uma referência para o próximo elemento. Isso permite que os elementos sejam adicionados e removidos de maneira eficiente em qualquer posição da lista, mas pode tornar a pesquisa de um elemento específico menos eficiente.

O LinkedList é uma boa escolha quando a inserção e remoção de elementos em qualquer posição da lista é frequente e quando não é necessário acessar os elementos de forma aleatória.

Vector
A classe Vector é semelhante ao ArrayList, mas é sincronizada, o que significa que é segura para uso em threads concorrentes. No entanto, a sincronização adiciona uma sobrecarga de desempenho, então o Vector pode ser mais lento que o ArrayList em algumas situações.

Stack
A classe Stack implementa uma pilha, que é uma coleção ordenada de elementos onde a inserção e remoção de elementos ocorrem sempre no mesmo extremo da lista. Os elementos são adicionados e removidos em uma ordem conhecida como "last-in, first-out" (LIFO), ou seja, o último elemento adicionado é o primeiro a ser removido. A classe Stack é usada com frequência em algoritmos de processamento de texto, bem como em outras situações em que a LIFO é a maneira natural de organizar os dados.

Map
O Map é uma interface que permite que os desenvolvedores associem chaves a valores. É uma estrutura de dados útil para muitas aplicações Java, especialmente aquelas que envolvem a manipulação de grandes quantidades de dados, portanto, é comum usá-lo para realizar buscas, atualização e recuperação de elementos por chaves

Ele é implementado por diversas classes, sendo a mais comum delas o HashMap.

HashMap
O HashMap é uma classe que implementa a interface Map usando uma tabela hash para armazenar os pares chave-valor. Ele é conhecido por sua eficiência em termos de tempo de execução. Essa classe tem uma complexidade de tempo O(1) - constante - para inserção, recuperação e remoção de elementos. Isso significa que o desempenho do HashMap não depende do tamanho da coleção de dados!

### SISTEMA COMPLETO + CONEXÃO MYSQL

> Conexão
getConexão: pega a classe do jdbc, faz a conexão com o DriverManager e retorna
> Model
Cria uma classe com todos os objetos e atributos a serem utilizados
> Controller
Faz um protected processRequest (geralmente é sobrescrito no doGet() e doPost()) e puxa as exceções. Depois cria a instância de livro e faz os ifs. Dentro dos ifs é só criar as strings necessárias (com o ParseInt quando necessário), depois fazer set em tudo e por último o try catch com o MODEL.funcao() e a mensagem. Aí é só puxar os jsp!!
Se for algo de lista tem que, dentro do try catch, criar uma List<Classe> nome = MODEL.funcao() e o resto vai normal...
> DAO
cria um public void com o método, puxa a classe connection con = classconexao.getConexao(), faz o string sql com a acao e puxa o PreparedStatement comando = con.prepareStatement(sql). Depois é só fazer os set(1, get) e fazer comando.execute e con.close
# se for de consulta
e tiver que pegar algum dado, precisa criar uma instancia da classe DAO e deixar como null, aí precisa fazer o ResultSet rs = comando.executeQuery() e deixar a instancia como new DAO, depois puxar os dados como instanciaDAO.set
# em caso de lista
só fazer o ResultSet e depois criar uma List<classe> nome = new ArrayList<>(), depois puxa igual instancia new DAO, instanciaDAO.set, e o add

> Depois faz o con.close e o return normalmente

# Os jsp precisam ter o form ACTION = Controle method = GET/POST, os inputs tem que ter como value o nome que o equals puxa no controle e tal
# o execute é só pra manipulação e o executeQuery é pra ter retorno de dados