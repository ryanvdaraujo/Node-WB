import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProdutos extends Cadastro {
    public produtos: Array<Produto>
    public entrada: Entrada
    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        console.log(`Ínicio do cadastro de produto`);

        let nomeProduto = this.entrada.receberTexto(`Digite o nome do produto: `)

        let precoProduto = this.entrada.receberNumero(`Digite o valor do produto: `)

        let produto = new Produto(nomeProduto, precoProduto)
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
}