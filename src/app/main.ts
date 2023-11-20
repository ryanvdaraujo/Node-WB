import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Sexo from "../modelo/sexo";
import Telefone from "../modelo/telefone";
import adicionarProdutoAoCliente from "../negocio/adicionarProdCliente";
import ApagarCliente from "../negocio/apagarCliente";
import ApagarProdutos from "../negocio/apagarProduto";
import ApagarServicos from "../negocio/apagarServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProdutos from "../negocio/cadastroProduto";
import CadastroServicos from "../negocio/cadastroServico";
import Listagem10Clientes from "../negocio/listagem10prodServQuant";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemGeneroF from "../negocio/listagemGeneroF";
import ListagemGeneroM from "../negocio/listagemGeneroM";
import ListagemGeneroO from "../negocio/listagemGeneroO";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();
let execucao = true;

empresa.setProdutos =[new Produto("Locão p/ barba", 18), new Produto("Shampoo", 15), new Produto("Cerveja", 7), new Produto("Condicionador", 13), new Produto("Suco de caju", 6), new Produto("Pente", 8), new Produto("Café", 4), new Produto("Minoxidil", 70), new Produto("Camiseta", 75), new Produto("Copão", 15), new Produto("Choop", 12), new Produto("Refrigerante", 5), new Produto("Baralho", 10), new Produto("Ficha de sinuca", 2), new Produto("Pomada capilar", 15), new Produto("Ficha de fliperama", 3), new Produto("Blusa moletom", 115), new Produto("Regata", 49), new Produto("Navalha", 4), new Produto("Água", 3)];

empresa.setServicos = [new Servico("Corte de cabelo social", 30), new Servico("Design de sobrancelha", 15), new Servico("Barba simples", 20), new Servico("Corte de cabelo navalhado", 35), new Servico("Barba c/ pigmentação", 30), new Servico("Corte de cabelo navalhado c/ desenho", 45), new Servico("Nevou", 50)];

// cadastro de 11 clientes no objeto cliente para teste
empresa.setClientes = [
    new Cliente("Joaquim", "Joaquim", new CPF("12345678900", new Date()), [new RG("23344445555", new Date())], new Date(), [new Telefone("12","821939283")], new Sexo("m"), [new Produto("cerveja", 7)], [new Servico("Corte de barba", 30)]),
    new Cliente("Joaqu", "Joaqu", new CPF("12345678901", new Date()), [new RG("23344445556", new Date())], new Date(), [new Telefone("12","821939283")], new Sexo("m"), [new Produto("cerveja", 7)], [new Servico("Corte de barba", 30), new Servico("Corte de cabelo social", 30)]),
    new Cliente("Cliente1", "Cliente1", new CPF("12345678911", new Date()), [new RG("23344445557", new Date())], new Date(), [new Telefone("12","821939284")], new Sexo("o"), [new Produto("cerveja", 7)], [new Servico("Corte de barba", 30), new Servico("Barba c/ pigmentação", 30)]),
    new Cliente("Cliente2", "Cliente2", new CPF("12345678912", new Date()), [new RG("23344445558", new Date())], new Date(), [new Telefone("12","821939285")], new Sexo("o"), [new Produto("cerveja", 7), new Produto("Shampoo", 15)], [new Servico("Corte de barba", 30)]),
    new Cliente("Cliente3", "Cliente3", new CPF("12345678913", new Date()), [new RG("23344445559", new Date())], new Date(), [new Telefone("12","821939286")], new Sexo("m"), [new Produto("cerveja", 7)], [new Servico("Corte de barba", 30)]),
    new Cliente("Cliente4", "Cliente4", new CPF("12345678914", new Date()), [new RG("23344445560", new Date())], new Date(), [new Telefone("12","821939287")], new Sexo("f"), [new Produto("cerveja", 7),new Produto("Shampoo", 15)], [new Servico("Corte de barba", 30)]),
    new Cliente("Cliente5", "Cliente5", new CPF("12345678915", new Date()), [new RG("23344445561", new Date())], new Date(), [new Telefone("12","821939288")], new Sexo("m"), [new Produto("cerveja", 7)], [new Servico("Corte de barba", 30), new Servico("Barba c/ pigmentação", 30)]),
    new Cliente("Cliente6", "Cliente6", new CPF("12345678916", new Date()), [new RG("23344445562", new Date())], new Date(), [new Telefone("12","821939289")], new Sexo("m"), [new Produto("cerveja", 7), new Produto("Shampoo", 15)], [new Servico("Corte de barba", 30)]),
    new Cliente("Cliente7", "Cliente7", new CPF("12345678917", new Date()), [new RG("23344445563", new Date())], new Date(), [new Telefone("12","821939290")], new Sexo("m"), [new Produto("cerveja", 7), new Produto("Shampoo", 15)], [new Servico("Corte de barba", 30)]),
    new Cliente("Cliente8", "Cliente8", new CPF("12345678918", new Date()), [new RG("23344445564", new Date())], new Date(), [new Telefone("12","821939291")], new Sexo("f"), [new Produto("cerveja", 7)], [new Servico("Corte de barba", 30)]),
    new Cliente("Cliente9", "Cliente9", new CPF("12345678919", new Date()), [new RG("23344445565", new Date())], new Date(), [new Telefone("12","821939292")], new Sexo("m"), [new Produto("cerveja", 7)], [new Servico("Corte de barba", 30)]),
    new Cliente("Cliente10", "Cliente10", new CPF("12345678920", new Date()), [new RG("23344445566", new Date())], new Date(), [new Telefone("12","821939293")], new Sexo("m"), [new Produto("cerveja", 7)], [new Servico("Corte de barba", 30)])
];

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Adicionar serviço ao cliente`);
    console.log(`6 - Adicionar produto ao cliente`);
    console.log(`7 - Cadastrar Serviço`);
    console.log(`8 - Listar todos os Serviços`);
    console.log(`9 - Listar os 10 clientes que mais consumiram produtos ou serviços por quantidade`);
    console.log(`10 - Listar clientes do gênero feminino`);
    console.log(`11 - Listar clientes do gênero masculino`);
    console.log(`12 - Listar clientes de outro gênero`);
    console.log(`13 - Apagar cliente`);
    console.log(`14 - Apagar produto`);
    console.log(`15 - Apagar Serviço`);
    console.log(`16 - Atualizar dados do cliente`);
    console.log(`17 - Atualizar dados do produto`);
    console.log(`18 - Atualizar dados do Serviço`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes);
            cadastro.cadastrar()
            break;

        case 2:
            let listagem = new ListagemClientes(empresa.getClientes);
            listagem.listar()
            break;

        case 3:
            let cadastrarProduto = new CadastroProdutos(empresa.getProdutos);
            cadastrarProduto.cadastrar()
            break;

        case 4:
            let listagemProd = new ListagemProdutos(empresa.getProdutos);
            listagemProd.listar()
            break;

        case 5:
            let listagemClientesS = new ListagemClientes(empresa.getClientes);
            listagemClientesS.listar();
            console.log("=======================================");
            let listagemServicosS = new ListagemServicos(empresa.getServicos);
            listagemServicosS.listar();
            console.log("=======================================");
            let opcaoClienteS = entrada.receberTexto("\nDigite o CPF do cliente a ser registrado o produto/serviço: \n");
            console.log("***************************************");
            let opcaoProdutoS = entrada.receberNumero("\nDigite o ID do produto/serviço a ser registrado: \n");
            adicionarProdutoAoCliente(empresa.getClientes, empresa.getServicos, opcaoClienteS, opcaoProdutoS);
            break;

        case 6:
            let listagemClienteP = new ListagemClientes(empresa.getClientes);
            listagemClienteP.listar();
            console.log("=======================================");
            let listagemProdutoP = new ListagemProdutos(empresa.getProdutos);
            listagemProdutoP.listar();
            console.log("=======================================");
            let opcaoCliente = entrada.receberTexto("\nDigite o CPF do cliente a ser registrado o produto/serviço: \n");
            console.log("***************************************");
            let opcaoProduto = entrada.receberNumero("\nDigite o ID do produto/serviço a ser registrado: \n");
            adicionarProdutoAoCliente(empresa.getClientes, empresa.getProdutos, opcaoCliente, opcaoProduto);
            break;

        case 7:
            let cadastroServico = new CadastroServicos(empresa.getServicos);
            cadastroServico.cadastrar()
            break;

        case 8:
            let listagemServicos = new ListagemServicos(empresa.getServicos);
            listagemServicos.listar()
            break;
            
        case 9:
            let listagem10 = new Listagem10Clientes(empresa.getClientes);
            listagem10.listar()
            break;

        case 10:
            let listagemGenero = new ListagemGeneroF(empresa.getClientes);
            listagemGenero.listar()
            break;

        case 11:
            let listagemGeneroM = new ListagemGeneroM(empresa.getClientes);
            listagemGeneroM.listar()
            break;

        case 12:
            let listagemGeneroO = new ListagemGeneroO(empresa.getClientes);
            listagemGeneroO.listar()
            break;

        case 13:
            let apagar = new ApagarCliente(empresa.getClientes);
            apagar.apagar();
            break;
        
        case 14:
            let apagarP = new ApagarProdutos(empresa.getProdutos);
            apagarP.apagar();
            break;

        case 15:
            let apagarS = new ApagarServicos(empresa.getServicos);
            apagarS.apagar();
            break;

        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
};