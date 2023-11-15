import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import adicionarProdutoAoCliente from "../negocio/adicionarProdCliente";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProdutos from "../negocio/cadastroProduto";
import CadastroServicos from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();
let execucao = true;

empresa.setProdutos =[new Produto("Locão p/ barba", 18), new Produto("Shampoo", 15), new Produto("Cerveja", 7), new Produto("Condicionador", 13), new Produto("Suco de caju", 6), new Produto("Pente", 8), new Produto("Café", 4), new Produto("Minoxidil", 70), new Produto("Camiseta", 75), new Produto("Copão", 15), new Produto("Choop", 12), new Produto("Refrigerante", 5), new Produto("Baralho", 10), new Produto("Ficha de sinuca", 2), new Produto("Pomada capilar", 15), new Produto("Ficha de fliperama", 3), new Produto("Blusa moletom", 115), new Produto("Regata", 49), new Produto("Navalha", 4), new Produto("Água", 3)];

empresa.setServicos = [new Servico("Corte de cabelo social", 30), new Servico("Design de sobrancelha", 15), new Servico("Barba simples", 20), new Servico("Corte de cabelo navalhado", 35), new Servico("Barba c/ pigmentação", 30), new Servico("Corte de cabelo navalhado c/ desenho", 45), new Servico("Nevou", 50)];

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
            
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
};