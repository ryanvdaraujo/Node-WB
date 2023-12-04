import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServicos extends Cadastro {
    public Servicos: Array<Servico>
    public entrada: Entrada
    constructor(Servicos: Array<Servico>){
        super();
        this.Servicos = Servicos
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        console.log(`\nÍnicio do cadastro de servico\n`);

        let nomeServico = this.entrada.receberTexto(`Digite o nome do serviço: `)

        let precoServico = this.entrada.receberNumero(`Digite o valor do serviço: `)

        let servico = new Servico(nomeServico, precoServico)
        this.Servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }
}