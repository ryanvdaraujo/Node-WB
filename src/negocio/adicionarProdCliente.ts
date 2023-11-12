import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";

export default function adicionarProdutoAoCliente(cliente: Cliente, produto: Produto): void {
    // Verificando se o índice do produto já existe na lista
    const produtoEscolhido = produto.find(p => p.index === produto.index);

    if (produtoEscolhido) {
        // Se o produto existir na lista, adiciona-o
        cliente.produtosConsumidos.push(produto);
        console.log(`Produto ${produto.nome} adicionado à lista do(a) cliente: ${cliente.nome}.`);
    } else {
        // Se o produto não existe, pode lidar com isso de acordo com a lógica do seu aplicativo
        console.log(`O produto escolhido não existe na lista de produtos.`);
    }
}


// // Definindo a estrutura do objeto Produto
// interface Produto {
//     nome: string;
//     preço: number;
//     index: number;
// }

// // Definindo a estrutura do objeto Cliente
// interface Cliente {
//     cpf: string;
//     nome: string;
//     produtosConsumidos: Produto[];
// }

// // Função para adicionar produto à lista de produtos consumidos com base no índice
// function adicionarProdutoAoCliente(clientes: Cliente[], cpfCliente: string, indexProduto: number): void {
//     // Encontrar o cliente pelo CPF
//     const cliente = clientes.find(c => c.cpf === cpfCliente);

//     if (cliente) {
//         // Verificar se o produto já foi consumido pelo cliente
//         const produtoExistente = cliente.produtosConsumidos.find(p => p.index === indexProduto);

//         if (!produtoExistente) {
//             // Adicionar o produto à lista de produtos consumidos
//             const produto: Produto = { nome: `Produto${indexProduto}`, preço: 0, index: indexProduto };
//             cliente.produtosConsumidos.push(produto);
//             console.log(`Produto ${produto.nome} adicionado à lista de ${cliente.nome}.`);
//         } else {
//             console.log(`Produto já consumido por ${cliente.nome}.`);
//         }
//     } else {
//         console.log(`Cliente com CPF ${cpfCliente} não encontrado.`);
//     }
// }

// // Exemplo de uso
// const clientes: Cliente[] = [
//     { cpf: '123456789', nome: 'Cliente1', produtosConsumidos: [] },
//     { cpf: '987654321', nome: 'Cliente2', produtosConsumidos: [] }
// ];

// // Chamar a função passando o CPF do cliente e o índice do produto
// adicionarProdutoAoCliente(clientes, '123456789', 1);

// // Exibir o resultado
// console.log(clientes);