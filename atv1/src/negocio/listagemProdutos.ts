import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos: \n`);
        this.produtos.forEach(produto => {
            console.log(`Nome do produto: ` + produto.nome);
            console.log(`Preço do produto: R$` + produto.valor);
            console.log(`ID: ` + produto.index);
            console.log(`**********************************`)
        })
    }
}