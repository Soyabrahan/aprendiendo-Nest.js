import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./task.service";
//en los controladores se aplica la logica es basicamente una funcion que se va a generar dependiendo la ruta que se llame
@Controller({}) // Path base
export class TasksController {

    tasksService : TasksService

    constructor(tasksService:TasksService){
        this.tasksService = tasksService;
    }

    @Get("/tasks") // Ruta relativa: GET /tasks

    getAllTasks() {
        // puedo buscar en una bd o hacer una peticion
        return this.tasksService.getTasks();
    }

}