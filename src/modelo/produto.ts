export default class Produto {
    [x: string]: any;
    public nome: string
    public valor: number
    public index: number

    private static proximoIndex: number = 1;
    static index: any;
    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
        this.index = Produto.proximoIndex;
        Produto.proximoIndex++;
    }
}