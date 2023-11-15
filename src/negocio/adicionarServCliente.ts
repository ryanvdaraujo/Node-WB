import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

// função para adicionar um serviço ao cliente
export default function adicionarServCliente(clientes: Cliente[], servicos: Servico[], cpfCliente: string, indexServico: number): void {
    //  Encontrar o cliente pelo CPF
    const cliente = clientes.find(c => c.cpf.getValor == cpfCliente);
    const servico = servicos.find(s => s.index == indexServico)
    
    if (cliente && servico) {
    // Adicionar o produto à lista de produtos consumidos
        cliente.setServicosConsumidos.push(servico);
        console.log(`Serviço ${servico.nome} adicionado à lista de ${cliente.nome}.`);
    } else {
        if(!cliente){
            console.log(`Cliente com CPF ${cpfCliente} não encontrado.`);
        }
        if(!servico){
            console.log(`Serviço de ID:${indexServico} não encontrado.`);
        }    
    }
}