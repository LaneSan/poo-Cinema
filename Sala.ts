import {Cliente} from "./Cliente";

export class Sala{
    private cadeira : Array<Cliente>;
    private lotacao : number;

    public constructor(cadeira : Array<Cliente>, lotacao : number){
        this.cadeira = cadeira;
        this.lotacao = lotacao;
    }

    public getCadeira(){
        return this.cadeira;
    }

    public setCadeira(cadeira : Array<Cliente>) : void{
        this.cadeira = cadeira;
    }

    public getLotacao(){
        return this.lotacao;
    }

    public setLotacao(lotacao : number) : void{
        this.lotacao = lotacao;
    }

    public reservar(id : string, telefone : string, lugar : number) : boolean{
        if(this.cadeira[lugar] != undefined && this.cadeira[id] == id){ //observar isso se vai dar certo
            return false;
        }

        this.cadeira[lugar] = new Cliente(id, telefone);
        return true;
    }

    public mostrar() : string{
        let res : string = "[";
        for(let i = 0; i < this.lotacao; i++){
            if(this.cadeira[i] != undefined){
                res += this.cadeira[i].toString() + " ";
            }else{
                res += "- ";
                res += "]";
            }
        }
        return res;

    }

    public cancelar(id : string) : boolean{
        for(let clientes of this.cadeira){
            if(id == clientes.getId()){
                let posicao = this.cadeira.indexOf(clientes);
                this.cadeira.splice(posicao, 1, undefined);
                return true;
            }else{
                return false;
            }
        }
    }
}