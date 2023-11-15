import Servico from "../modelo/servico";
import CadastroServicos from "./cadastroServico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos: \n`);
        this.servicos.forEach(servico => {
            console.log(`Nome do serviço: ` + servico.nome);
            console.log(`Preço do serviço: R$` + servico.valor);
            console.log(`ID: ` + servico.index);
            console.log(`**********************************`)
        })
    }
}