import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProdutos from "../negocio/cadastroProduto";
import ListagemClientes from "../negocio/listagemClientes";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

empresa.setProdutos =[new Produto("Locão p/ barba", 18), new Produto("Shampoo", 15), new Produto("Cerveja", 7), new Produto("Condicionador", 13), new Produto("Suco de caju", 6), new Produto("Pente", 8), new Produto("Café", 4), new Produto("Minoxidil", 70), new Produto("Camiseta", 75), new Produto("Copão", 15), new Produto("Choop", 12), new Produto("Refrigerante", 5), new Produto("Baralho", 10), new Produto("Ficha de sinuca", 2), new Produto("Pomada capilar", 15), new Produto("Ficha de fliperama", 3), new Produto("Blusa moletom", 115), new Produto("Regata", 49), new Produto("Navalha", 4), new Produto("Água", 3)]

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar Produto`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cadastrarProduto = new CadastroProdutos(empresa.getProdutos)
            cadastrarProduto.cadastrar()
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}