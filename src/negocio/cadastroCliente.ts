import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";
import Sexo from "../modelo/sexo";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        let valorCpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataCpf = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = dataCpf.split('/');
        let anoCpf = new Number(partesData[2].valueOf()).valueOf()
        let mesCpf = new Number(partesData[1].valueOf()).valueOf()
        let diaCpf = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissaoCpf = new Date(anoCpf, mesCpf, diaCpf)
        let cpf = new CPF(valorCpf, dataEmissaoCpf);

        let valorRg = this.entrada.receberTexto(`Por favor informe o seu RG: `);
        let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do seu RG, no padrão dd/mm/yyyy: `);
        let partesDataRg = dataRg.split('/');
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let rg = new RG(valorRg, dataEmissaoRg);

        let dataCadastro = new Date();

        let cod = this.entrada.receberTexto(`Por favor informe seu DDD: `);
        let num = this.entrada.receberTexto(`Por favor informe seu numero de telefone: `);
        let telefone = new Telefone(cod, num);

        let sexo
        while (true) {
            let entradaSexo = this.entrada.receberTexto(`Por favor informe seu sexo com "f" para feminino, "m" para masculino ou "o" para outro: `)
            if (entradaSexo == "f" || entradaSexo == "m" || entradaSexo == "o") {
                if (entradaSexo == "f") {
                    sexo = "Feminino"
                } else if (entradaSexo = "m") {
                    sexo = "Masculino"
                } else {
                    sexo = "Outro"
                }
                break;
            } else {
                console.log("Sexo informado inválido, tente novamente")
            }
        }
        let produtoConsumido
        let servicoConsumido

        let cliente = new Cliente(nome, nomeSocial, cpf, [rg], dataCadastro, [telefone], sexo, [produtoConsumido], [servicoConsumido]);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}