export default class Produto {
    public nome: string
    public valor: number
    public index: number

    private static proximoIndex: number = 1;
    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
        this.index = Produto.proximoIndex;
        Produto.proximoIndex++;
    }
}