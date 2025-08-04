### Voltar para o [README.md](./README.md)  

### Sobre o SPRING BOOT

> etapas
1 - decidir a organização dos pacotes
* ver sobre arquitetura de camadas (básico e tal, infrastructure - pacotes de bancos de dados, repositórios, coisas de segurança etcm business - normalmente tem as services e converters, controller)

DTO - data transfering object, classe de transferencia de objetos, pra transferir dados de uma classe para outra classe

put - atualiza tudo, diferente do patch que atualiza apenas uma parte!!

## JAVA
Introdução ao Regex: As expressões regulares são ferramentas poderosas para verificar padrões complexos em strings, como e-mails, números de telefone e CPF, superando as limitações do método contains.

Criando um Padrão: Para identificar um padrão, como um e-mail, utilizamos a classe Pattern do Java. Um exemplo de padrão para e-mails é \\w+@\\w+\\.\\w+, que busca por caracteres alfanuméricos seguidos de um arroba, um domínio e uma extensão.

Verificando Correspondências: A classe Matcher é usada para aplicar o padrão ao texto e verificar se há correspondências. O método find() retorna verdadeiro se o padrão for encontrado, e group() exibe o resultado.

Elementos e Caracteres Especiais: A aula apresenta diversos caracteres especiais e quantificadores que podem ser usados em regex, como \d para dígitos, \w para caracteres alfanuméricos, e quantificadores como *, + e ? para definir a quantidade de ocorrências.

Formatando Telefones: Um exemplo prático de formatação de números de telefone é apresentado, onde um número sem formatação é transformado em um formato legível usando regex.

Recursos Adicionais: A aula sugere o uso de ferramentas online, como o regex101, para testar e validar expressões regulares, além de mencionar a importância da prática para dominar o uso de regex.

> import java.util.Scanner;  
public class RemovendoEspacos {  
    public static void main(String[] args) {  
        Scanner scanner = new Scanner(System.in);  
        System.out.print("Digite o nome: ");  
        String nome = scanner.nextLine();          
        String nomeFormatado = nome.trim();  
        System.out.println("Nome sem espaços: " + nomeFormatado);  
        scanner.close();  
>   }    
>}  

> import java.util.Scanner;  
public class SubstituindoPalavras {  
    public static void main(String[] args) {  
        Scanner scanner = new Scanner(System.in);  
        System.out.print("Digite o texto: ");  
        String texto = scanner.nextLine();  
        System.out.print("Digite a palavra a ser substituída: ");  
        String palavraAntiga = scanner.nextLine();    
        if (!texto.contains(palavraAntiga)) {  
            System.out.println("Palavra não encontrada.");  
            scanner.close();  
            return;   
        }  
        System.out.print("Digite a nova palavra: ");  
        String palavraNova = scanner.nextLine();  
        String textoModificado = texto.replace(palavraAntiga, palavraNova);  
        System.out.println("Texto modificado: " + textoModificado);  
        scanner.close();  
    }  
}  

Usar métodos como trim(), toLowerCase(), toUpperCase(), replace(), substring()e contains() para transformar, modificar e analisar textos.
Formatar strings incorporando valores e expressões diretamente no texto, utilizando especificadores como %s, %d, %f, %n e %.2f.
Acessar caracteres individuais de uma string por meio de índices e a extrair partes específicas de um texto usando o método substring().
Usar métodos como matches(), find(), group() e replaceAll() para interagir com textos aplicando regex.

Classes Principais:

LocalDate: para trabalhar com datas.
LocalTime: para trabalhar com horas.
LocalDateTime: para trabalhar com data e hora completas.
Métodos Importantes:

of(): para criar datas e horas específicas.
now(): para obter a data e hora atuais.
parse(): para converter strings em datas.
Manipulação de Datas:

Métodos como plusDays(), minusDays(), isBefore(), isAfter(), e isEqual() para manipular e comparar datas.
Formatação de Datas:

Utilização de DateTimeFormatter para formatar datas em diferentes padrões.
Fusos Horários:

Uso de ZonedDateTime para trabalhar com datas e horários em diferentes fusos horários.
Cálculo de Diferença entre Datas e Horas:

Uso de Duration para horas e Period para datas, permitindo calcular a diferença entre dois momentos.

#

spring é um framework que abstrai o que é comum pra ajudar a focar

> dependencias (bibliotecas e frameworks) ecossistema (ferramentas, bibliotecas e recursos)

**MAVEN:** gerencia dependências de projeto (pom.xml),tem figurações predefinidas, tem ciclo de vida padrão diferente (mvn compile, mvn test e mvn package), possui repositório central com grande variedade de bibliotecas em java prontas. **Vantagens:** Maven é fácil de aprender e tem ecossistema grande. **Desvantagens:** XML podem ficar muito grandes e dificeis de gerenciar.

**GRADLE:** ferramente de construção e automação baseada em groovy e kotlin e permite flexibilidade, oferece mais liberdade com relação a organização do projeto, baixa as dependências como repositórios remotos, realiza compilações incrementais. **Vantagens:** permite scripts mais poderosos e é mais flexível. **Desvantagens:** dicífil de aprender, ecossistema não tão grande.

> semelhanças: oferecem repositórios e bibliotecas para o gerenciamento e a lógica da construção, e suportam IDEs de integração contínua.

> diferenças: um usa XML para gerenciar as dependências e o outro usa um formato de script.

> CommandLineRunner permite que executemos ações logo após o inicio da aplicação, meio que de forma automatica. Só pedir uma classe:
**public void MyCommandLineRunner implements CommandLineRunner{ public void run(String... args) throws Exception{ System.out.println("algo");}}**

A **JPA (Java Persistence API)** é a especificação mais conhecida dentro do ecossistema Java para facilitar a persistência de dados. Ela define uma interface comum para mapear objetos Java a tabelas de bancos de dados e realizar operações CRUD. Conceitos-chave como Entidade, EntityManager e JPQL (Java Persistence Query Language) são introduzidos para ajudar na compreensão do funcionamento da JPA.

Hibernate é uma das implementações mais populares da JPA, que oferece uma maneira simplificada de acessar bancos de dados e é amplamente utilizada devido à sua comunidade ativa e documentação disponível.

**One-To-Many (Um-Para-Muitos)**: Neste tipo de relação, um registro em uma tabela pode se relacionar com muitos registros em outra tabela. Por exemplo, um professor pode dar aulas para muitos alunos e criar uma relação um-para-muitos entre o professor e os alunos.

**Many-To-One (Muitos-Para-Um)**: Aqui, muitos registros em uma tabela podem se relacionar com um registro em outra tabela. Usando o exemplo anterior, muitos alunos podem ter aula com um mesmo professor, estabelecendo uma relação muitos-para-um.

**Many-To-Many (Muitos-Para-Muitos)**: Nesta relação, muitos registros em uma tabela podem se relacionar com muitos registros em outra tabela. Bem, um aluno pode ter aulas com vários professores e vice-versa, certo? Esta é uma relação muitos-para-muitos.

**One-To-One (Um-Para-Um)**: Neste tipo de relação, um registro em uma tabela se relaciona com apenas um registro em outra tabela, e vice-versa. Por exemplo, um usuário pode ter apenas um endereço, e este endereço pertence a apenas um usuário.

# Cascade

PERSIST : se você persistir a entidade Post, os Comments relacionados também serão persistidos.
MERGE : se você mesclar os detalhes de um Post, os Comments relacionados também serão mesclados.
REMOVE : se você remover um Post, os Comments relacionados também serão removidos.
REFRESH : se você atualizar o Post, também atualizará os Comments relacionados.
DETACH : se um Post foi desanexado, todos os Comments relacionados serão desanexados também.
ALL : se você executar qualquer uma das operações acima em um Post, essa operação será propagada para todos os Comments relacionados.

# Request web
GET para obter dados,
POST para enviar novos dados,
PUT para atualizar dados existentes,
DELETE para remover dados.

# Gerenciadores de Build
Build permite que o código-fonte seja distribuido/executado, compila arquivos, baixa bibliotecas e dependencias, empacotar o programa e tal
> aí pra facilitar tem os gerenciadores de build
## Maven
usa um padrão de arquivos XML pra definir a construção de projeto


## Gradle
Usa arquivos em Groovy ou Kotlin e permite uma configuração um pouco mais personalizada, por não ser em XML

