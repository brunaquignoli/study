### Voltar para o [README.md](./README.md)

java API's são uma forma mais eficiente de filtrar, mapear, reduzir e aumentar fluxos de dados, e eles fazem isso usando **LAMBDA**

> Dica: OMDb API
> ao usar uma api, é preciso concatenar as informações, e pra isso existem algumas aplicações tipo o postman
> precisa fazer uma http request
> precisa pegar um gson de maven pra organizar os dados (https://mvnrepository.com) > no caso estamos usando o gson:https://mvnrepository.com/artifact/com.google.code.gson/gson e https://google.github.io/gson/UserGuide.html  
 {@JsonProperty("nome do querido") String nomeEmJava} define um nome específico em java que será desserializado em json, procurando o nome definido em java ao invés do em json. ***Tipo uma propriedade em java nomeCompleto e em Json queremos ela como nome!!!***
 {@JsonAlias("nomeCompleto", "nome") String nomeCompleto} permite que o java aceite diferentes nomes oferecidos pelo Json. ***Tipo uma classe java com nomeCompleto e em Json está como nomem, nesse caso ele vai aceitar os dois***

 ## lambda:
 utilizamos o "->" para definir que um atributo é lambda. (parametro) -> expressao

 ## stream
 sequencia de elementos que podem ser processados em paralelo ou em série, pode ser criada a partir de qualquer coisa, dentro disso temos .filter() .collect() .map() .forEach() .filter()
stream(): uma espécie de lista que processa cada item, como uma esteira!! Que aceita funções específicas
> comparator.comparing(algo::comparacao) -> faz uma comparação com base em algo (tipo avaliação de episodios, fica (episodio::avaliação))
> .reversed() -> inverte a ordem de algo
> .limit(X) -> limita algo a X


>find any: procura qualquer coisa que cite algo dentro do código


 ## Genérico:
 São métodos e outros etcs que podem trabalharcom tipos desconhecidos de parâmetros, é só usar eles entre <>. 

> peek:
processa dados mas não finaliza, permitindo que façamos alterações neles depois, mas, que vejamos o que já foi processado nele antes de finalizar, como se a gente fosse tomar um spoiler

array é um grupo simples de elementos onde cada elemento tem um index diferentes

> temos também ArrayList, LinkedList, Set, Stack, Queue!!  

> Collections(criam coleções imutáveis, tais conjuntos, listas e mapas, sem que haja uma modificação acidental):
Collections.unmodifiableList: lista imutável a partir de uma lista já existente
Collections.unmodifiableMap: mapa imutável a partir de um mapa já existente
Collections.unmodifiableSet: conjunto imutável a partir de um conjunto já existente

> Para usar data:
podemos fazer um java.util.Date;

Bibliotecas != frameworks:  Bibliotecas são funcionalidades prontas para uso, em JAR, e contém classes e demais recursos, podem ser importadas em projetos e usadas diretamente em código pra funcionalidades específicas. Frameworks são estruturas de arquitetura básica para desenvolvimento de aplicações, e podem incluir bibliotecas e práticas recomendadas pro desenvolvimento. (como se fosse uma fábrica de aplicações + conjunto de regras pra fazer isso)

> option: objeto que pode ou não retornar algo NULL

> classes wrapper

> dentro de um try catch, podemos usar um "finally" pra printar algo se por exemplo, uma linha funcionar:  
try {  
  metodoQuePodeLancarExcecao();  
  System.out.println("Executou");  
} catch (Exception e) {  
  System.out.println("Deu erro!");  
} finally {  
  System.out.println("Finalizou!");  
}  

![exemplo de input/output java](imagens/javaexample.png)

WEB SERVICES > trabalhar com mapeamentos, conversão de objetos 
em qualquer transporte, JAXB ou JAXP => XML e vice-versa (são literalmente as funções de ligação e processamento dentre XML e JAVA)

no HTTP, os objetos podem ser colocados, apagados, postados e pegos dentre o java e a mensagem colocada (podendo estar em texto, JavaScript Object Notation e XML).

jAVA EE (ENTERPRISE) faz o host com segurança, concorrencia, gerenciamento e tal

## Padrões de projeto:
criação: lidam com a criações de objeto, procurando garantir flexibilidade e reutilização (Factory Method, Builder, Singleton)  
estrutura: lidam com a organização de objetos buscando simplificar a comunicação entre eles (Adapter, Facade, Composite)  
comportamento: lidam com a comunidação entre objetos, querendo definir comportamentos específicos em situações específicas (Observer, Command e Strategy)  

> class **File** exists(), canRead(), canWrite(), isDirectory(), isFile(), mkdir(), delete(), FileReader e FileWriter. **File file = new File("C:\\meuArquivo.txt");**
File file = new File("C:\\meuArquivo.txt");
FileReader reader = new FileReader(file);

int data = reader.read();
while (data != -1) {
    System.out.print((char) data);
    data = reader.read();
}
reader.close();

#

File file = new File("C:\\saida.txt");
FileWriter writer = new FileWriter(file);
writer.write("Olá, mundo!");
writer.close();

> Para ler um arquivo com essa classe, basta criar uma instância dela e passar como argumento um objeto do tipo File, contendo o caminho do arquivo. 

public class LeituraDeArquivo {
    public static void main(String[] args) {
        try {
            File arquivo = new File("arquivo.json");
            Scanner scanner = new Scanner(arquivo);

            while (scanner.hasNextLine()) {
                String linha = scanner.nextLine();
                System.out.println(linha);
            }

            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("Arquivo não encontrado!");
        }
    }
}

> Criar exceções: if(algo) {throw new ErroAleatorio("erro")};   
> pedir pra transformar em classe né  

# AOO - Faculdade

> Um dos pilares de **Coad** e **Yourdon** é separar a lógica da interface, tornando o sistema mais coeso, reutilizável e manutenível. Pontos principais da metodologia Coad/Yourdon: Modelagem baseada em objetos do mundo real  
> foco na **experiencia do usuário**, colocar ele no centro do login  
> **separação de responsabilidades**, separando regras de negócio (lógica de sistema), e códigos de interface (telas), aumenta a manutenibilidade, facilita testes e permite evolução sem gerar problemas.  
> Coesão significa que **uma classe deve cuidar apenas de uma responsabilidade**, como interface, regras de negócio e etc  
> os objetos devem ser criados de modo a facilitar a interação, ou seja, **baseados em conceitos reais**, e a usabilidade é essencial  
#
> a **paleta** guarda todos os componentes gráficos que podem ir para a tela ao arrastados. Como Jlabel que podem exibir textos, JtextField que é entrada de textos e etc.   
> O **getText()** nunca retorna exceção se o campo estiver vazio, mas pode trazer string vazia (""), o que pode ser um problema se você usar esse valor sem validar.  
>Tem também a parte de **design** que cuida da interface gráfica e o **código-fonte**. O **editor de propriedades** de um elemento consegue mudá-lo diretamente. Por último, o **inspetor** mostra a ordem de todos os elementos da tela.  
> Border, flow e grid layout: **border** permite redimensionamento conforme a janela cresce ou diminui, **flow** rganiza os componentes em uma linha, adicionando-os um após o outro e **grid** permite que os componentes sejam organizados em uma grade, com linhas e colunas definidas.  
> **CardLayout** permite simular uma troca de telas com alternação de painéis.  
> **addActionListener()** conecta uma função ou bloco de código a ser executado quando o evento de clique acontece. **actionPerformed** faz o mesmo!  
> O polimorfismo permite substituir um botão padrão por outro customizado, desde que ambos implementem a mesma interface ou classe base.  
> Java não permite **herança múltipla** com classes, apenas com interfaces. herança múltipla é quando uma classe herda de mais de uma (embora Java não permita isso diretamente com classes, só interfaces).  

# 

> **Model** define as ações a serem executadas, **view** é aonde o usuário coloca as informações necessárias e o **controller** pega todos esses dados, define quais vão ser usados e envia eles pro model!  