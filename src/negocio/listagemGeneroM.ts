import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemGeneroM extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        // listar clientes por gênero
        let masculino: Array<Cliente | undefined> = [];
        this.clientes.forEach(cliente => {
            if (cliente.getSexo.getGenero == "m"){
                masculino.push(cliente);
            };
        });
        
        if (masculino !== null) {
        console.log(`\nLista de todos os clientes do gênero masculino:\n`);
            masculino.forEach(f => {
                if (f !== undefined) {
                    console.log(`Nome: ` + (f.nome)); 
                    console.log(`Nome social: ` + (f.nomeSocial || 'N/A'));
                    console.log(`Sexo: ` + (f.getSexo.getGenero || 'N/A'));
                    console.log(`CPF: ` + (f.getCpf?.getValor || 'N/A'));
                    f.getRgs.forEach(rg => {
                        console.log(`RG: ` + (rg?.getValor || 'N/A'));
                    });
                    console.log(`Data de cadastro: ` + (f.getDataCadastro?.toLocaleDateString() || 'N/A'));
                    f.getTelefones.forEach(telefone => {
                        console.log(`Telefone: ` + ((telefone?.getDdd || 'N/A') + (telefone?.getNumero || 'N/A')));
                    });
                    console.log(`ID: ` + (f.index));
                    console.log(`--------------------------------------`);
                }else {
                        console.log("Nenhum cliente gênero masculino encontrado!");
                    }
                
        });
        } 
    }
}