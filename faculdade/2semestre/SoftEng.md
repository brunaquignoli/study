### Voltar para o [README.md](./README.md)

sumário = meio acadêmico 
índice = não é explicativo
framework
RUP e UML
GAP - gráfico de acompanhamento do projeto
representação gráfica de andamento do projeto

tópico no banco de dados que relacione nível de transtorno e as atividades e cores da plata

	sgcopex - software responsável pelo gerenciamento de projetos de pesquisa e extensão, parte de um processo gerenciável escalável, para evoluir gradual e permanentemente.
I) 	Instruções/programas que fornecem funções e desempenhos
II) 	estrutura de dados para manipulação das informações
III)	informações descritivas sobre uso de programas

Na etapa de processo, contexto de aplicação, modelos técnicos,  metodologias e entrega são definidas, pontos como qualidade e mudanças são garantidas para serem efetuadas de forma apropriada. O processo é a etapa de selecionar a melhor forma de realizar o projeto.
Ferramentas de visualização de detalhes e forma de execução: como UML, PHP etc.
Métodos são os roteiros responsáveis pelo desenvolvimento do software, abordando a estrutura de forma facilitada, com alta-qualidade e custo-benefício.
Dentro dos processos de metodologia, atividades, ações e tarefas estão alocadas como base para serem aplicadas em todo o processo de engenharia de software.
Modelo de processo de software descreve simplificadamente o processo, de forma específica. Acima do modelo se projeta a arquitetura, e em cima dessa arquitetura, se complementa as outras condições.
A partir disso, os clientes definem as incrementações no sistema e se define uma série de datas de entrega, cada uma com uma melhoria no software.
Prototipação é a versão teste inicial, pra ver problemas e possíveis soluções, processos incompletos e 
etc.
UML - LINGUAGEM DE MODELAGEM UNIFICADA é uma linguagem padrão de visualização que auxilia na descrição do sistema, principalmente aqueles com uso de POO. 
	Por exemplo,  diagrama de caso de uso tem uma visão geral das funcionalidades do sistema, mostrando uma sequencia das ações de forma perfeita, e a interação entre usuários e sistema de forma bem compreensível. E, também, demonstrar o comportamento do sistema por interações com os atores, que são os responsáveis por executar esses casos de uso.
	Outro exemplo é o diagrama de classe, que define a estrutura das classes utilizadas pelo sistema, define atributos e os métodos de cada classe, junto com seus relacionamentos e a troca de informações entre elas. Contendo:
		classe (descrição de objetos com mesmas características e relações). 
		Relações (liga os elementos, podendo ser: dependência [linha tracejada] - alteração de um elemento que afeta outro elemento. Generalização [linha com triangulo na ponta] - um elemento geral e um específico. Associação [linha cheia] - especifica objetos de uma classe ligados a de outra classe).
		Multiplicidade (número de instancia que ela pode se associar à uma instancia de outras classes).
		Instâncias (operações aplicadas e um registro dos efeitos das operações feitas).
		Objeto (é uma instância, herda todos os atributos da classe e se executa de estado próprio).
		Operações (podem ser efetuadas por objetos nas classes).
		Estado (é dado pelos valores assumidos pelas características do objeto).
	MODELAGEM CONCEITUAL - representação sincera do problema, citando dados e relacionamentos.
MODELAGEM CONCEITUAL - representação sincera do problema, citando dados e relacionamentos.

especificação - entrevista com principais requisitos.
projeto - uso dos diagramas e decisão dos relacionamentos, consulta de documento de requisitos e diagramas.
implementação - utilização de linguagens.
validação - apresentação a coordenadores, execução de protocolos e testes de usabilidade.

artefatos obrigatórios dos requisitos funcionais: precisa ter uma tarefa específica a ser executada (ou várias, como: precisa ser executado em PHP com mysql)

metodologias: diferentes formas de aplicar cada tarefa (etapas, coisas do briefing, modelo de desenvolvimento)

metáfora de interface - (uma associação) pegamos itens que nos remetam a funcionalidade física de algo. exemplo: lixeira, associamos o físico ao digital (CUIDADO COM ISSO)

SEI (Software Engineering Institute)

focar em pessoas, procedimentos, métodos, ferramentas e

procedimentos e métodos definem relacionamentos entre tarefas e atividades

processo estabelece quem faz, o que é quando, e como

desenvolvimento é o limite pra resolver problemas

grandes alterações de versão entram na documentação

tomar cuidado com as etapas de desenvolvimento
elicitacao de requisitos - o que ele precisa pra funcionalidade?
documento que define os requisitos a serem implementados

especificações técnicas

requisitos funcionais 
usuário na tela login: O que ele pode fazer? login? recuperar senha?
usuário na tela home: pode visualizar informações?
usuário na tela documento: consultar critérios? consultar notas? consultar faltas? consultar horário de aula? consultar calendário acadêmico?

 caixa de informação
 ligar os requisitos não funcionais com os requisitos funcionais
 adicionar tela de configuração, FAQ e ajuda
 requisitos de dados define se tem documentos ou não (onde entram os dados
 documentação - banco de dados, requisitos de dados
 requisitos funcionais e não funcionais - usuários e sistemas

 modelo de capacidade em capacitação
 levantamento de arquitetura
testes de levantamento
front
back
banco de dados
 CMM
e tem o CMMI - modelo integrado de capacidade em capacitação
 pmi, pmbook
 Pedro bok- resoluções de problemas pra softwares
 dev - voltado a processo de desenvolvimento de produtos e serviços
acc - processo de aquisição e terceirização de bens e serviços
smc - processos de empresas prestadoras de serviços
 maturidade 1 - 5
capacidade 0 - 3 (avalia pessoas)
 começar por front, back, e banco ou front e banco
 atinge 3 quando todos os objetivos genéricos forem concluídos
 utilizar diagramas (conhecimentos de banco de dados)
 capacidade

0 - não há objetivos genéricos 
1 - incompleto ou não realizado
2 - gerenciado
3 - analisar e validar requisitos (SP 3.1 ATE SP 3.5)
 experiência do usuário - vê qualidade final

 engenharia de sistemas - 
categorias: configurados para o usuário (sistema a partir de softwares existentes), cliente produz um conjunto de requisitos (desenvolve do 0)
 sistemas de informações - processamento de informações armazenadas em algum BD
sistemas embutidos -  software é utilizado como controlador do hardware 
sistemas de comando e controle - combinação de sistemas de informação e sistemas embutidos, onde eles provém informação que é coletada, armazenada e usada para decisões 

clp
 classes de sistemas - aparecem quando os subsistemas forem integrados, como: confiabilidade, manutenabilidade, desempenho, usabilidade, segurança (propriedades emergentes e requisitos não - funcionais)

subsistemas - parte do sistema, cuida dos objetivos genéricos
 teste unitário - subdivisões/subsistemas feitas pra serem executadas juntas
 engenharia de requisitos do sistema - stakeholders (partes interessadas, cliente, usuário e galera da arquitetura)

projeto de arquitetura - 

partição de requisitos - requisitos alocados a subsistemas

engenharia de requisitos de software - detalhes do sistema são 

desenvolvimento do sistema - subsistemas são projetados e implementados em paralelo

integração de sistemas - subsistemas de hardware e software são alocados juntos 

validação so sistema - validação final do usuário e do cliente
 resumo, glossário 

padrão IEE
- introdução (não obrigatório) 👎🏻
-  propósito documento requisitos
- escopo do produto
- definições e acrônimos 👎🏻
- referências
- resumo do resto
 - descrição geral
- perspectiva do produto
- funções do produto
- características do usuário
- limitações gerais
- supocições e dependências
- trwuiditodbespecigiv9d
- apêndice e índice
- prefácio
- introdução
- glossário


abreviações só pra termos técnicos específicos do sistema
 classes de sistemas
 cmmi - "foco no que deve ser feito"
PSP - "como..." (auxilia a estimar e planejar as tarefas, acompanhar a performance e melhorar a qualidade dos produtos)
 - passos definidos
- formulários
- padrões
 https://www.devmedia.com.br/cmmi-uma-visao-geral/25425
 registros (tempo, defeitos)
padrão (tipos de defeito, codificação)
medida de tamanho 
proposta de melhoramento do processo
 design do projeto - etapas, processos lógicos
 o que faz? o que fez?
 como testei? como mensurei?
 requisitos, planejamento, projeto, revisão, codificação, revisão, compilação e correção, teste e pós-morte
 PSP - scripts
 tsp - continuidade do psp
 tspi - simplificação do tsp pra projetos pequenos
 iterar - repetir
---------------------------


Interoperabilidade:
RNF - O Sistema deve armazenar os dados do usuário diretamente no banco de dados.


Domínio:
RNF - Sempre que houver um cadastro novo, o sistema deverá apresentar o questionário  avaliativo para coleta de dados psicotécnicos.
RNF - Diariamente, o sistema apresentará as atividades cadastradas para o aluno, de acordo com o nível adquirido.
RNF - Semanalmente, o sistema calculará um diagnóstico dos resultados do aluno.
RNF - 


###

1) O que é a Engenharia de Software? Uma área de desenvolvimento profissional para a produção de um Software. Abrangendo desde as especificações, até a manutenção.


2) Diante dos aspectos da produção de software, quais são as principais preocupações do engenheiro de software e quais não devem ser as suas preocupações? 
As suas preocupações são Desenvolver softwares e aplicativos, gerenciar projetos ligados aos softwares, arquitetar o design estrutural dos programas e realizar testes nos sistemas.
Não preocupações: Gerenciamento financeiro e orçamentos, sobre aspectos de marketing e vendas e infraestrutura de hardware.


3) Porque a engenharia de software é importante, cite seus motivos. 
Porque ela lida com os processos, ferramentas e métodos de um desenvolvimento, juntamente com a análise do problema, síntese de solução,


4) Quais são as categorias que pertencem aos participantes de um projeto de desenvolvimento de software? 
Cliente, que é quem paga pelo desenvolvimento do software; Desenvolvedor, que é quem desenvolve o software para o cliente; Usuário,  que é quem utiliza o software após conclusão.


5) Quais são os principais objetivos organizacionais de sistemas de informação? Cite os 5 principais objetivos das organizações para 
grandes investimentos.
Excelência operacional, relacionamento mais estreito com os clientes, relacionamento mais estreito com os fornecedores, vantagem competitiva e sobrevivência. 


6) Qual a responsabilidade de um gerente de configurações? 
O gerente trabalha com o bibliotecário, fazendo a manutenção de correspondência entre requisitos, projetos, e partes que podem ser afetadas por alterações. Cuidando também das versões que foram e podem ser implementadas e receber suporte. Eles garantem que o sistema funcione em diferentes plataformas e versões.





7) Em um processo sistêmico de software, temos uma sequência de atividades que serão encadeadas para compor a produção de um ou mais produtos de software. Quais são estas atividades? Qual é a sequência de processo de software? Ela inclui atividades como gerenciamento de projeto de software e desenvolvimento de ferramentas, métodos e teorias para apoiar a produção de software.


8) Com as mudanças áreas da tecnologia e consequentemente nos sistemas de informação gerencial, há duas grandes mudanças que estão inter-relacionadas à tecnologia. Quais são estas duas mudanças? 
A computação empresarial, que adapta sistemas de desktop para dispositivos móveis, o que permite que os trabalhadores possam manter comunicação via celular. E também o uso de tecnologias de "big data" para a tomada de decisões. 


9) Segundo Sommerville (2011), para determinar a qualidade de um software é necessário atender a alguns requisitos funcionais de software, quais são estes requisitos? 
Manutenibilidade, confiança e proteção, eficiência e aceitabilidade.


10) Segundo apontamentos estatísticos, a atividade de desenvolvimento de software exige práticas que são estudas constantemente na Engenharia de Software e que apontam o insucesso de projetos de sistemas de informação. Qual o papel ético e profissional de engenheiro de software como busca de qualidade e sucesso em seus projetos? 
Verificar a qualidade e estrutura de software, analisar, projetar, especificar, desenvolver, testar e dar manutenção ao longo do ciclo de vida do software.


11) O termo ISO/IEC 12.207 (2011) refere-se à evolução do sistema, produto, serviço, projeto ou outra entidade construída. Qual o termo utilizado para definir esta ISO? Explique como ela funciona. 
O termo utilizado é "ciclo de vida de software", o padrão 12207 prescreve um processo para o desenvolvimento e manutenção de software, através da determinação de um conjunto de atividades essenciais que devem ser completadas para se obter um produto de software.


12) Segundo Sommerville (2011), o processo de software é definido como um conjunto de atividades e resultados para a produção de software do qual compreender quatro fases fundamentais de processo. Quais são estes processos fundamentais citados pelo autor?
As 4 atividades fundamentais do processo de software citadas pelo autor são: especificações, desenvolvimento, validação e evolução.


13) Segundo Brooks (1987), definiu quatro dificuldades inerentes ao desenvolvimento de software. Quais são estas quatro dificuldades? Por que são citadas como dificuldades pelo autor? 
Brooks definiu quatro dificuldades no desenvolvimento de sistemas de software, que foram: complexidade, conformidade, modificabilidade e invisibilidade. Em cada citação, encontra-se uma definição de dificuldade. Sobre a complexidade, é em relação aos componentes de hardware e software que compõem uma solução como um todo. Conformidade, em relação ao desenvolvimento, evolução e adaptação de uma versão mais recente do sistema como um todo. Modificabilidade, relacionada a pressões por mudanças e alterações. E por fim, invisibilidade, associada ao fato de não existir uma visão espacialmente representável do software e seu diagrama, durante seu desenvolvimento.


14) Segundo SEI (Software Engineering Institute), para auxiliar as organizações e a desenvolver e manter a qualidade nos produtos e serviços de software, são identificadas três dimensões focadas na melhoria de seu negócio. Quais são estas três dimensões? 
As 3 dimensões citas pelo SEI para auxiliar organizações a desenvolver e manter a qualidade nos produtos e serviços de software são: pessoas, procedimentos e métodos, ferramentas e equipamentos.


15) O que são os modelos de desenvolvimento em cascata, evolucionário e o incremental? Cite a diferença entre eles. 
Os modelos de desenvolvimento de Software Cascata, evolucionário e Incremental são estratégias para processos que auxiliam o desenvolvimento e mantimento a qualidade nos produtos e serviços de Software.
Cascata: O modelo cascata é caracterizado pela sua execução sequencial das fases. Desta forma fazendo com que a fase seguinte do processo de desenvolvimento não deve iniciar  até que a fase anterior seja concluída. Este fato é a principal diferença do modelo cascata para os outros.
Evolucionário: É um modelo de processo de desenvolvimento de software que torna inadequado um planejamento linear de um produto de software. Tendo como principal característica e também diferença em relação aos outros a sua evolução, assim como o nome diz, ao longo do tempo conforme as fases de desenvolvimento do Software avançam. Possibilitando mudanças nas necessidades de negócios e os produtos. Basicamente é um modelo que permite a execução de um produto que abre espaços para uma evolução ao longo do tempo e criação de versões cada vez mais completas do Software.
Incremental: É o modelo caracterizado por desenvolver uma implementação inicial do sistema, e realizar avaliações com os usuários para continuar a construção do Software em função de versões intermediárias executadas até o produto mais adequado ser desenvolvido. Sendo esta também a principal diferença em relação aos outros. Também é um modelo que segundo Sommerville quando aplicado permite a produção de Software com um menor custo e maior facilidade de se acomodar mudanças durante o desenvolvimento.


16) Qual a diferença entre requisitos funcionais, não funcionais? 
Requisitos funcionais indicam as tarefas e maneiras que o sistema deve oferecer e agir diante de determinadas situações. Já os requisitos não funcionais, indicam as restrições se funções e serviços oferecidas pelo sistema.


17) Nos conceitos de requisitos e engenharia de requisitos, os requisitos podem ser apresentados com diferentes níveis de abstração. Quais são estes níveis?
Os níveis de abstração são os requisitos de usuário, requisitos funcionais, requisitos não funcionais, requisitos de sistema, requisitos de dados.


18) Qual a proposta citada pela norma IEEE/ANSI 830/1998 para a organização e requisitos e especificações de projetos de software? 
A proposta padrão IEEE/ANSI 830-1993 é um padrão para estruturação da documentos de requisitos, que deve ser adaptado conforme o tipo de sistema desenvolvido, cobrindo os principais aspectos da engenharia de sistemas, incluindo suas classes, processos e estruturas de documentação.


19) Explique o que são: processos, métodos e ferramentas.
Processos são os momentos de seleção de maneiras de realizar o projeto, onde aplicação, entrega, modelos, metodologias e mudanças são definidas de forma apropriada. 
O método atua como um tipo de roteiro, que fica responsápelo desenvolvimento do software e descreve a estrutura do projeto de forma específica, visando a alta-qualidade e o custo benefício.
E ferramentas são os modelos de visualização de detalhes.


20) Cite quais são as Equipes de desenvolvimento de software.
As equipes de analista de requisitos, projetistas, programadores, testadores, instrutores, responsáveis pela manutenção, bibliotecários e gerentes de configurações. 


21) Quais os principais objetivos do PSP e o TSP nas metodologias de desenvolvimento de software.
Os objetivos do PSP são: auxiliar o desenvolvedor a gerenciar seu trabalho, oferecer e analisar métricas, introduzir técnicas e ajudar no nível pessoal, capacidade e melhoria dos engenheiros.
Já os objetivos do TSP se baseiam nos princípios do PSP, mas quando aplicados com foco nas equipes e em seus processos e desenvolvimentos. 



22) Quais são os níveis de maturidade e de capacidade no CMMI?
Os níveis de maturidade vão de 1 a 5, sendo eles, respectivamente: inicial, gerenciado (ou repetitivo), definido, gerenciado quantitativamente, otimizado.
Já os níveis de capacidade vão de 0 a 3, sendo eles o nível 0 de incompleto, 1 de não realizado, 2 de gerenciado e 3 de definido.


23) Cite exemplo de propriedades emergentes em uma classe de sistemas integrados aos sub-sistemas.
Propriedades emergentes são características do sistema que se manifestam apenas quando todos os sub-sistemas estão integrados, como: confiabilidade, manutenabilidade, desempenho, usabilidade e segurança.


24) Quais as diferenças entre metas específicas e metas genéricas?
As metas específicas são os resultados determinados a cada área do processo. Já as genéricas, são aplicáveis a todos os processos do software, o que vai definir em qual nível de capacidade ele está.


25) Como são categorizados o ciclo de vida de software? Explique cada um deles.
As categorias do ciclo de vida de um software são: especificação de software, projeto, implementação, testes e evolução.
Especificação de software: Levantamento e especificação das funcionalidades do software e as restrições sobre sua operação.
Projeto: Construção e desenvolvimento do projeto de software buscando atender as especificações
Implementação: Implementação prática do desenvolvimento do Software.
Testes: Fase onde são realizados os devidos testes para identificar a eficiência do funcionamento do Software e realizar as devidas mudanças caso necessário.
Evolução: Fase onde o projeto que está definido e funcionando passa pela análise e verificação de possíveis melhorias, otimizações e evoluções do Software.
