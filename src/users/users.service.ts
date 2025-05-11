import { Injectable } from '@nestjs/common';
//en el service es donde voy a desarrollar las funciones repetitivas para que el controlador las use
@Injectable() //Los decoradores son para marcar la clase de si es un [modulo,controlador,servicio]
export class UsersService {

    private users = [
        {
            id:1,
            name:"Saul",
            pais:"Peru"
        },
        {
            id:2,
            name:"Luisca",
            pais:"Peru" 
        }
    ];


    getUsers(){
        return this.users;
    }

}
