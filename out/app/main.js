"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var produto_1 = __importDefault(require("../modelo/produto"));
var rg_1 = __importDefault(require("../modelo/rg"));
var servico_1 = __importDefault(require("../modelo/servico"));
var sexo_1 = __importDefault(require("../modelo/sexo"));
var telefone_1 = __importDefault(require("../modelo/telefone"));
var adicionarProdCliente_1 = __importDefault(require("../negocio/adicionarProdCliente"));
var apagarCliente_1 = __importDefault(require("../negocio/apagarCliente"));
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var cadastroProduto_1 = __importDefault(require("../negocio/cadastroProduto"));
var cadastroServico_1 = __importDefault(require("../negocio/cadastroServico"));
var listagem10prodServQuant_1 = __importDefault(require("../negocio/listagem10prodServQuant"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var listagemGeneroF_1 = __importDefault(require("../negocio/listagemGeneroF"));
var listagemGeneroM_1 = __importDefault(require("../negocio/listagemGeneroM"));
var listagemGeneroO_1 = __importDefault(require("../negocio/listagemGeneroO"));
var listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
var listagemServicos_1 = __importDefault(require("../negocio/listagemServicos"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
empresa.setProdutos = [new produto_1.default("Locão p/ barba", 18), new produto_1.default("Shampoo", 15), new produto_1.default("Cerveja", 7), new produto_1.default("Condicionador", 13), new produto_1.default("Suco de caju", 6), new produto_1.default("Pente", 8), new produto_1.default("Café", 4), new produto_1.default("Minoxidil", 70), new produto_1.default("Camiseta", 75), new produto_1.default("Copão", 15), new produto_1.default("Choop", 12), new produto_1.default("Refrigerante", 5), new produto_1.default("Baralho", 10), new produto_1.default("Ficha de sinuca", 2), new produto_1.default("Pomada capilar", 15), new produto_1.default("Ficha de fliperama", 3), new produto_1.default("Blusa moletom", 115), new produto_1.default("Regata", 49), new produto_1.default("Navalha", 4), new produto_1.default("Água", 3)];
empresa.setServicos = [new servico_1.default("Corte de cabelo social", 30), new servico_1.default("Design de sobrancelha", 15), new servico_1.default("Barba simples", 20), new servico_1.default("Corte de cabelo navalhado", 35), new servico_1.default("Barba c/ pigmentação", 30), new servico_1.default("Corte de cabelo navalhado c/ desenho", 45), new servico_1.default("Nevou", 50)];
// cadastro de 11 clientes no objeto cliente para teste
empresa.setClientes = [
    new cliente_1.default("Joaquim", "Joaquim", new cpf_1.default("12345678900", new Date()), [new rg_1.default("23344445555", new Date())], new Date(), [new telefone_1.default("12", "821939283")], new sexo_1.default("m"), [new produto_1.default("cerveja", 7)], [new servico_1.default("Corte de barba", 30)]),
    new cliente_1.default("Joaqu", "Joaqu", new cpf_1.default("12345678901", new Date()), [new rg_1.default("23344445556", new Date())], new Date(), [new telefone_1.default("12", "821939283")], new sexo_1.default("m"), [new produto_1.default("cerveja", 7)], [new servico_1.default("Corte de barba", 30), new servico_1.default("Corte de cabelo social", 30)]),
    new cliente_1.default("Cliente1", "Cliente1", new cpf_1.default("12345678911", new Date()), [new rg_1.default("23344445557", new Date())], new Date(), [new telefone_1.default("12", "821939284")], new sexo_1.default("o"), [new produto_1.default("cerveja", 7)], [new servico_1.default("Corte de barba", 30), new servico_1.default("Barba c/ pigmentação", 30)]),
    new cliente_1.default("Cliente2", "Cliente2", new cpf_1.default("12345678912", new Date()), [new rg_1.default("23344445558", new Date())], new Date(), [new telefone_1.default("12", "821939285")], new sexo_1.default("o"), [new produto_1.default("cerveja", 7), new produto_1.default("Shampoo", 15)], [new servico_1.default("Corte de barba", 30)]),
    new cliente_1.default("Cliente3", "Cliente3", new cpf_1.default("12345678913", new Date()), [new rg_1.default("23344445559", new Date())], new Date(), [new telefone_1.default("12", "821939286")], new sexo_1.default("m"), [new produto_1.default("cerveja", 7)], [new servico_1.default("Corte de barba", 30)]),
    new cliente_1.default("Cliente4", "Cliente4", new cpf_1.default("12345678914", new Date()), [new rg_1.default("23344445560", new Date())], new Date(), [new telefone_1.default("12", "821939287")], new sexo_1.default("f"), [new produto_1.default("cerveja", 7), new produto_1.default("Shampoo", 15)], [new servico_1.default("Corte de barba", 30)]),
    new cliente_1.default("Cliente5", "Cliente5", new cpf_1.default("12345678915", new Date()), [new rg_1.default("23344445561", new Date())], new Date(), [new telefone_1.default("12", "821939288")], new sexo_1.default("m"), [new produto_1.default("cerveja", 7)], [new servico_1.default("Corte de barba", 30), new servico_1.default("Barba c/ pigmentação", 30)]),
    new cliente_1.default("Cliente6", "Cliente6", new cpf_1.default("12345678916", new Date()), [new rg_1.default("23344445562", new Date())], new Date(), [new telefone_1.default("12", "821939289")], new sexo_1.default("m"), [new produto_1.default("cerveja", 7), new produto_1.default("Shampoo", 15)], [new servico_1.default("Corte de barba", 30)]),
    new cliente_1.default("Cliente7", "Cliente7", new cpf_1.default("12345678917", new Date()), [new rg_1.default("23344445563", new Date())], new Date(), [new telefone_1.default("12", "821939290")], new sexo_1.default("m"), [new produto_1.default("cerveja", 7), new produto_1.default("Shampoo", 15)], [new servico_1.default("Corte de barba", 30)]),
    new cliente_1.default("Cliente8", "Cliente8", new cpf_1.default("12345678918", new Date()), [new rg_1.default("23344445564", new Date())], new Date(), [new telefone_1.default("12", "821939291")], new sexo_1.default("f"), [new produto_1.default("cerveja", 7)], [new servico_1.default("Corte de barba", 30)]),
    new cliente_1.default("Cliente9", "Cliente9", new cpf_1.default("12345678919", new Date()), [new rg_1.default("23344445565", new Date())], new Date(), [new telefone_1.default("12", "821939292")], new sexo_1.default("m"), [new produto_1.default("cerveja", 7)], [new servico_1.default("Corte de barba", 30)]),
    new cliente_1.default("Cliente10", "Cliente10", new cpf_1.default("12345678920", new Date()), [new rg_1.default("23344445566", new Date())], new Date(), [new telefone_1.default("12", "821939293")], new sexo_1.default("m"), [new produto_1.default("cerveja", 7)], [new servico_1.default("Corte de barba", 30)])
];
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Cadastrar produto");
    console.log("4 - Listar todos os produtos");
    console.log("5 - Adicionar servi\u00E7o ao cliente");
    console.log("6 - Adicionar produto ao cliente");
    console.log("7 - Cadastrar Servi\u00E7o");
    console.log("8 - Listar todos os Servi\u00E7os");
    console.log("9 - Listar os 10 clientes que mais consumiram produtos ou servi\u00E7os por quantidade");
    console.log("10 - Listar clientes do g\u00EAnero feminino");
    console.log("11 - Listar clientes do g\u00EAnero masculino");
    console.log("12 - Listar clientes de outro g\u00EAnero");
    console.log("13 - Apagar cliente");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("\nPor favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var cadastrarProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastrarProduto.cadastrar();
            break;
        case 4:
            var listagemProd = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProd.listar();
            break;
        case 5:
            var listagemClientesS = new listagemClientes_1.default(empresa.getClientes);
            listagemClientesS.listar();
            console.log("=======================================");
            var listagemServicosS = new listagemServicos_1.default(empresa.getServicos);
            listagemServicosS.listar();
            console.log("=======================================");
            var opcaoClienteS = entrada.receberTexto("\nDigite o CPF do cliente a ser registrado o produto/serviço: \n");
            console.log("***************************************");
            var opcaoProdutoS = entrada.receberNumero("\nDigite o ID do produto/serviço a ser registrado: \n");
            (0, adicionarProdCliente_1.default)(empresa.getClientes, empresa.getServicos, opcaoClienteS, opcaoProdutoS);
            break;
        case 6:
            var listagemClienteP = new listagemClientes_1.default(empresa.getClientes);
            listagemClienteP.listar();
            console.log("=======================================");
            var listagemProdutoP = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutoP.listar();
            console.log("=======================================");
            var opcaoCliente = entrada.receberTexto("\nDigite o CPF do cliente a ser registrado o produto/serviço: \n");
            console.log("***************************************");
            var opcaoProduto = entrada.receberNumero("\nDigite o ID do produto/serviço a ser registrado: \n");
            (0, adicionarProdCliente_1.default)(empresa.getClientes, empresa.getProdutos, opcaoCliente, opcaoProduto);
            break;
        case 7:
            var cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 8:
            var listagemServicos = new listagemServicos_1.default(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 9:
            var listagem10 = new listagem10prodServQuant_1.default(empresa.getClientes);
            listagem10.listar();
            break;
        case 10:
            var listagemGenero = new listagemGeneroF_1.default(empresa.getClientes);
            listagemGenero.listar();
            break;
        case 11:
            var listagemGeneroM = new listagemGeneroM_1.default(empresa.getClientes);
            listagemGeneroM.listar();
            break;
        case 12:
            var listagemGeneroO = new listagemGeneroO_1.default(empresa.getClientes);
            listagemGeneroO.listar();
            break;
        case 13:
            var apagar = new apagarCliente_1.default(empresa.getClientes);
            apagar.apagar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
;
