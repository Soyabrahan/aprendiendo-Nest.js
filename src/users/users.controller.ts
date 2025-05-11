import { Controller,Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()  // indicamos que la clase es un controlador
export class UsersController {

    //creamos el constructor de la clase de servicio de users
    constructor(private userService : UsersService){}; //forma abreviada de generar un constructor

    @Get("/users") //indicamo que la siguiente funcion es de tipo get y que se ejecuta cuando se visita /users

    getUsers(){
        return this.userService.getUsers();
    }
}
