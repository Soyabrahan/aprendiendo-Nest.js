import { Controller, Get,Post,Put,Delete,Patch } from "@nestjs/common";
import { TasksService } from "./task.service";
//en los controladores se aplica la logica es basicamente una funcion que se va a generar dependiendo la ruta que se llame
@Controller("/tasks") // Path base
export class TasksController {
     //metodo contructor largo
     /*
    tasksService : TasksService

    constructor(tasksService:TasksService){ //creamos el constructor de la clase de servicio
        this.tasksService = tasksService;
    }
    */
   //Constructor corto
   constructor(private tasksService : TasksService){};

    @Get() // Ruta relativa: GET /tasks

    getAllTasks() {
        // puedo buscar en una bd o hacer una peticion
        return this.tasksService.getTasks();
    }

    @Post() // Ruta relativa: Post /tasks
    createTask() {
        // puedo buscar en una bd o hacer una peticion
        return this.tasksService.createTask();
    }


    @Put() // Ruta relativa: Put /tasks
    updateTask() {    //actualiza todo el objeto
        // puedo buscar en una bd o hacer una peticion
        return this.tasksService.updateTask();
    }

    @Delete () // Ruta relativa: Put /tasks
    deleteTask() {
        // puedo buscar en una bd o hacer una peticion
        return this.tasksService.deleteTask();
    }

    @Patch () // Ruta relativa: Put /tasks
    updateStatusTask() {   //actualiza una porcion
        return this.tasksService.updateStatusTask();
    }



}