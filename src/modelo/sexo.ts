export default class Sexo{
    public sexo: string
    constructor(sexo: string){
        this.sexo = sexo
    }
    public get getGenero(): string{
        return this.sexo
    }
}