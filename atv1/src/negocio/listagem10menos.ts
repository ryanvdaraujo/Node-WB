import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class Listagem10menos extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    };
    public listar(): void {
        let consumidores: any = []
        this.cliente.forEach(qnt => {
            let nomeCliente = qnt.nome
            let qntidadeConsumo = qnt.getProdutosConsumidos.length + qnt.getServicosConsumidos.length
            consumidores.push({ nome: nomeCliente, quantidade: qntidadeConsumo })
        })
        let ordenacao = consumidores.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return a.quantidade - b.quantidade;
        });
        let restricao = ordenacao.slice(0,9)
        restricao.forEach(( consumidos: {nome: string; quantidade: string})=> {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade: ${consumidos.quantidade} \n`);
        });
    };
};