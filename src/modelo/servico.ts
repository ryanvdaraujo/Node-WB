export default class Servico {
    public nome: string
    public valor: number
    public index: number

    private static proximoIndex: number = 1
    static index: any
    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
        this.index = Servico.proximoIndex
        Servico.proximoIndex++
    }

    public get getNome(): string {
        return this.nome
        }
    public get getValor(): number {
        return this.valor
    }
}