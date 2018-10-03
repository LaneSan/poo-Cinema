export class Cliente{
    private id : string;
    private telefone : string;

    public constructor(id: string, telefone: string){
        this.id = id;
        this.telefone = telefone;
    }

    public getId(): string{
        return this.id;
    }

    public setId(id : string): void{
        this.id = id;
    }

    public getTelefone(): string{
        return this.telefone;
    }

    public setTelefone(telefone : string): void{
        this.telefone = telefone;
    }

    public toString() : string{
        let res : string = "";
        res += this.id + ":" + this.telefone;
        return res;
    }

}