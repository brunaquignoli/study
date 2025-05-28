### Voltar para o [README.md](./README.md)

Uma rede é composta por vários nós (dispositivos) interligados, como computadores, celulares, roteadores, etc. Esses dispositivos se comunicam seguindo protocolos, que são padrões de comunicação que permitem que eles "conversem" entre si, de forma semelhante a como seguimos um padrão de fala ao encontrar alguém conhecido.

A internet é uma rede global de dispositivos interligados ao redor do mundo, permitindo que enviemos mensagens de um lugar para outro, não importa a distância.

> Ping + endereço de rede: teste conectividade
Usado para verificar se dois computadores dessa rede são capazes de trocar dados entre si?
(Se o tempo for maior que o TTL, ou time-to-live sendo uma estimativa de tempo ele dá como perdido na rede!!)

> Traceroute + endereço:
Ele rastreia o caminho que um pacote de dados percorre da sua origem até o seu destino na rede.

> DNS:
 Traduz nomes de domínio legíveis por humanos (como google.com) em endereços IP numéricos (como 192.0.2.44) que as máquinas usam para se comunicar na internet.

> Nslookup:
Lets users enter a host name and find out the corresponding IP address or domain name system (DNS) record.

> HUB:
É um dispositivo de rede que interliga múltiplos dispositivos em uma rede local, permitindo que todos os dispositivos se comuniquem entre si.

> Switch:
O hub não consegue memorizar onde um equipamento está localizado, o Switch sim!
Mas dá pra inserir vários endereços MAC falsos para “encher” a memória do Switch e fazer com que ele atue como um Hub. E se resolve isso Configurar a opção de segurança na porta, para que fique limitada a receber uma quantidade máxima de endereços MAC.

> Wireshark:
Função de analisar protocolos utilizados na troca de pacotes pelo computador, facilitando a solução de problemas na rede.

> Mascara de rede:
Dividir o endereço IP em dois grupos (rede e máquina) para que seja possível definir quando outro dispositivo estará na mesma rede que a dele.

> MDI e MDIX: o que são?

MDI (Medium Dependent Interface): É o padrão de interface utilizado pelas NICs (placas de rede) de computadores ou outros dispositivos de rede.

MDIX (Medium Dependent Interface Crossover): É o padrão ajustado para realizar o "cruzamento" de sinais necessário para conectar dois dispositivos do mesmo tipo (como dois computadores ou dois switches).

#

O roteador é o dispositivo de rede adequado para conectar sua rede local (193.167.2.0/24) a redes externas, como a internet.
O default gateway é utilizado no encaminhamento de pacotes entre a rede local e redes externas, sendo o “portão de saída” de uma rede.

#

IPv4 e IPv6:
O IPv4 usa 32 bits para endereçamento, permitindo 4,3 bilhões de dispositivos.
O IPv6, uma evolução, utiliza 128 bits, possibilitando um número muito maior de dispositivos.
O tunelamento é usado para encapsular IPv6 em redes IPv4.
Limites de Endereço no IPv4:
Os endereços IPv4 variam de 0.0.0.0 a 255.255.255.255.
Classes de IP (IPv4):
Classe A:
Inicia com 1 a 126 no primeiro octeto.
Máscara padrão: 255.0.0.0.
Endereço de rede é obtido preenchendo os octetos não utilizados pela máscara com 0.
Endereço de broadcast é obtido preenchendo os octetos não utilizados pela máscara com 255.
Classe B:
Inicia com 128 a 191 no primeiro octeto.
Máscara padrão: 255.255.0.0.
Similar à classe A, mas com dois octetos para a rede.
Classe C:
Inicia com 192 a 223 no primeiro octeto.
Máscara padrão: 255.255.255.0.
Três octetos para a rede, ideal para redes menores.
Classes D e E:
Classe D (224 a 239): Usada para multicast.
Classe E (240 a 255): Reservada para pesquisa e desenvolvimento.

#

O comando ipconfig está exibindo o IP privado usado apenas para comunicação na rede local, enquanto o site está exibindo o IP público.

> DHCP:
Um IP com DHCP (Dynamic Host Configuration Protocol) é um endereço de IP atribuído dinamicamente a um dispositivo em uma rede. Em vez de configurar manualmente um endereço IP estático para cada dispositivo, o DHCP automatiza esse processo.

> Broadcast:
Quando um dispositivo não possui endereço IP ele não sabe a quem perguntar, então ele precisa verificar entre dispositivos da mesma rede quem poderá fornecer um endereço IP. Quando essa comunicação é feita para todos, chamamos isso de Broadcast.

> DNS:
Um servidor DNS é feito única e exclusivamente para a tradução de domínios para endereços de IP. Desse modo, sua função não é hospedar sites ou aplicações, mas sim permitir que as requisições cheguem aos locais corretos.