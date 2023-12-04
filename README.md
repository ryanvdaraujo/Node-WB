# ATVIV-WB
## Atividade 4 (WB) - Programação Orientada a Objetos - Fatec SJC

-------------------------------------
## Descrição da atividade

Após  o  desenvolvimento  do  pré-projeto  para  GUI  do  sistema,  você  obteve  experiência  em  desenvolvimento front-end e melhorou, consideravelmente, seu conhecimento sobre HTML, CSS e bibliotecas para construção de  interfaces  gráficas  na  web. Mas,  ainda  lhe  falta  experiência  sobre  como funciona  acomunicação  entre front-end e back-end.Depois de conversar com a equipe de desenvolvimento, descobriu-seque há um pré-projeto para o back-end. Este pré-projeto seguiu a arquitetura REST, com um micro-serviçodesenvolvido.O pré-projeto back-end está acessível no endereço https://github.com/gerson-pn/atviv-wb-typescript.

O  pré-projeto  back-end  não  está  completo.  O  micro-serviço  possui,  apenas,  habilidade  de  listar,  cadastrar, atualizar  e  excluir  clientes,  o  que  não  abrange  todas  as  funcionalidades  do  sistema,  mas  é  suficiente  para treinar habilidades de desenvolvimento e integração front-end e back-end.

Para acessar as informações do serviço deve-se conhecer suas rotas, seus end-points. O pré-projeto back-end possui os seguintes end-points, considerando a execução em máquina local:
* http://localhost:32832/clientes -rota para acesso da lista de clientes.
* http://localhost:32832/cliente/{id} -rota para acesso a um cliente específico, por id.
* http://localhost:32832/cliente/cadastrar-rota para cadastrar um novo cliente.
* http://localhost:32832/cliente/excluir -rota para excluir um cliente.
* http://localhost:32832/cliente/atualizar-rota para atualizarum cliente.

## Como usar? 

### Front-end

* Inicialmente, é necessário rodar o comando "npm install" para instalar as dependências do projeto front-end.

* Depois, basta rodar o comando "npm run start" no console do terminal e a aplicação GUI, desenvolida em REACT e MATERIALIZE, carregará automaticamente no endereço http://localhost:3000/


### Back-end

* No repositório  https://github.com/gerson-pn/atviv-wb-typescript há  um aplicativo  executável,  que  disponibiliza  todo  o  back-end montado,  com  suas rotas e,  inclusive,  um  banco de  dados  pronto,  que  funciona  em  memória. O  nome do aplicativo executável é “wbbackend.jar”.Este arquivo está disponível na pasta chamada de “executável”. O executável é capaz de “levantar” toda a aplicação back-end,  de  uma  vez  só,  mas  para  isso  é  necessário utilizar a máquina virtual Java, para execução. Isto é feito através do comando: “java -jar wbbackend.jar”. Este comando  deve  ser  executado  em  um  terminal.Algo  importante  é  que  o  executável  só  funciona  com  uma máquina virtual na versão 17 ou superior.

## Funcionalidades

* Listar todos os clientes;
* Pesquisar um cliente por meio de seu ID;
* Cadastrar um novo cliente;
* Atualizar o cadastro de um cliente;
* Deletar clientes.

### Tela de busca/listagem de clientes

* Nesta tela são listados os clientes registrados no banco de dados;
* Também é possível realizar a busca por um cliente especifico. Basta inserir o ID do cliente registrado no campo de entrada de dados. Se ele for encontrado,
a tabela será atualizada e passará a exibir apenas os dados do cliente pesquisado.
* Outra função disponível nesta tela é a exclusão de um cliente. Ao clicar na lixeira vermelha, o cliente é removido da base de dados.

![image](https://github.com/viniferlima/ATVIV-WB/assets/30990193/cd01cc3d-57dd-4814-9444-4976e70aff08)

### Tela de cadastro de itens

* Nesta tela é possível criar um novo registro de cliente no banco de dados:

![image](https://github.com/viniferlima/ATVIV-WB/assets/30990193/8b54d03d-e6ec-4605-b291-c4fc8f7ba0b4)

### Tela de alteração de clientes

* Nesta tela é possível atualizar os dados de um cliente já registrado no banco de dados:

![image](https://github.com/viniferlima/ATVIV-WB/assets/30990193/cb878655-55e0-46a6-a2c6-345c02ccc5ca)


### Layout Mobile

![image](https://github.com/viniferlima/ATVIV-WB/assets/30990193/255b382c-c47d-4c21-b9b5-5a715974a8be)

### Observação

Foquei em apenas desenvolver o que estava sendo pedido na atividade 4 (WB). As demais funções das outras entidades, fora "Cliente", serão desenvolvidas na ultima atividade.


