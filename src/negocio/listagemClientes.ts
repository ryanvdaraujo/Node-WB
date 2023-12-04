import { type } from "os";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    // ... (seu código existente)

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            if (cliente) { // Verifica se o cliente é válido
                console.log(`Nome: ` + (cliente.nome || 'N/A')); // Usa 'N/A' se nome for undefined
                console.log(`Nome social: ` + (cliente.nomeSocial || 'N/A'));
                console.log(`Sexo: ` + (cliente.getSexo || 'N/A')); // Adiciona () para chamar a função getSexo
                console.log(`CPF: ` + (cliente.getCpf?.getValor || 'N/A')); // Usa 'N/A' se getCpf for undefined
                cliente.getRgs.forEach(rg => {
                    console.log(`RG: ` + (rg?.getValor || 'N/A')); // Usa 'N/A' se getValor for undefined
                });
                console.log(`Data de cadastro: ` + (cliente.getDataCadastro?.toLocaleDateString() || 'N/A'));
                cliente.getTelefones.forEach(telefone => {
                    console.log(`Telefone: ` + ((telefone?.getDdd || 'N/A') + (telefone?.getNumero || 'N/A')));
                });
                console.log(`ID: ` + (cliente.index || 'N/A'));
                
                try {
                    cliente.getProdutosConsumidos.forEach(P => {
                        console.log(`Produto(s) consumido(s):` + (P?.nome || 'N/A') + ", R$:" + (P?.valor || 'N/A'));
                    });
                } finally {
                    console.log("O cliente não possui nenhum consumo registrado.");
                }
                
                console.log(`--------------------------------------`);
            } else {
                console.error("Cliente é undefined ou null.");
            }
        });
        console.log(`\n`);
    }
}