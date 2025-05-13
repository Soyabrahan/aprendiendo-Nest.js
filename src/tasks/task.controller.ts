import { Controller, Get,Post,Put,Delete,Patch,Body,Param } from "@nestjs/common";
import { TasksService } from "./task.service";
//en los controladores se aplica la logica es basicamente una funcion que se va a generar dependiendo la ruta que se llame
@Controller("/tasks") // Path base       //decorador que indica que es un controlador
//en el controlador se definen las rutas y los metodos http que se van a utilizar

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

    @Get("/:id") // Ruta relativa: GET /task/2

    getTask(@Param("id") id: string) { //parametro de la ruta
        // puedo buscar una tarea
        return this.tasksService.getTask(parseInt(id)); //volvemos el id a int ya que es lo que espera la otra funcion
    }


    @Post() // Ruta relativa: Post /tasks
    createTask(@Body() task:any) {
        // puedo buscar en una bd o hacer una peticion
        return this.tasksService.createTask(task);
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