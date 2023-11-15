import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"
import Sexo from "./sexo"

export default class Cliente {
    static find(arg0: (p: any) => boolean) {
        throw new Error("Method not implemented.")
    }
    public nome: string
    public nomeSocial: string
    public cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private sexo: Sexo
    public index: number

    private static proximoIndex: number = 1;
    constructor(nome: string, nomeSocial: string, cpf: CPF, rgs: Array<RG>, dataCadastro: Date, telefones: Array<Telefone>, sexo: Sexo, produtosConsumidos: Array<Produto>) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = dataCadastro
        this.telefones = telefones
        this.produtosConsumidos = produtosConsumidos
        this.servicosConsumidos = []
        this.sexo = sexo
        this.index = Cliente.proximoIndex
        Cliente.proximoIndex++;
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getSexo(): Sexo {
        return this.sexo
    }

    public set setProdutosConsumidos(produtosConsumidos: Array<Produto>) {
        this.produtosConsumidos = produtosConsumidos
    }

    public set setServicosConsumidos(servicosConsumidos: Array<Servico>) {
        this.servicosConsumidos = servicosConsumidos
    }

}