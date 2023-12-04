import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";

export default function adicionarProdutoAoCliente(clientes: Cliente[], produtos: Produto[], cpfCliente: string, indexProduto: number): void {
    //  Encontrar o cliente pelo CPF
    const cliente = clientes.find(c => c.cpf.getValor == cpfCliente);
    const produto = produtos.find(p => p.index == indexProduto) 
    
    if (cliente && produto) {
    // Adicionar o produto à lista de produtos consumidos
        cliente.setProdutosConsumidos.push(produto);
        console.log(`Produto ${produto.nome} adicionado à lista de ${cliente.nome}.`);
        
    } else {
        if(!cliente){
            console.log(`Cliente com CPF ${cpfCliente} não encontrado.`);
        }
        if(!produto){
            console.log(`Produto de ID:${indexProduto} não encontrado.`);
        }    
    }
}