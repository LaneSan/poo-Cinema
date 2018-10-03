declare function require(name: string): any;
var input = require('readline-sync');

import {Cliente} from "./Cliente";
import {Sala} from "./Sala";

let sala : Sala;
let cliente : Cliente;
let cmd : string;
let help : string = "Todas as opções do comando";
let comando : Array<string>;

while(true){
    cmd = input.question("Digite o caminho ou sair: ");
    if(cmd == "sair"){
        console.log("Tchau, volte sempre!");
        break;
    }else{
        if(cmd == "Help"){
            console.log(help);
        }else{
            
            comando = cmd.split(" ");
            switch (comando[0]){
                case "init":
                    sala = new Sala([],parseInt(comando[1])); //parseInt coneverte em um number inteiro e parcFloat em
                    //um número quebrado
                    break;

                case "mostrar":
                    console.log(sala.mostrar());
                    break;

                case "reservar":
                if(sala.reservar(comando[1], comando[2], parseInt(comando[3])) == true){
                    console.log(this.cadeira.toString());
                    console.log("Reserva realizada com sucesso");
                }else{
                    console.log("Impossivel realizar reserva");
                }
                    //sala.reservar(comando[1], comando[2], parseInt(comando[3]));
                    break;

                case "cancelar":
                let cancel: boolean = sala.cancelar(comando[1]);
                if(cancel == true){
                    console.log("Cancelamento realizado com sucesso");
                }else{
                    console.log("Cadeira não reservada");
                }
                    break;

            }
        }
    }
}

