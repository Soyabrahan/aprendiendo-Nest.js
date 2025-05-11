import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService{

    getTasks(){
        return ["Task 1", "Task 2", "Task 3"]
    }

    updateTask(){
        return "Actualizando tarea";
    }

    deleteTask(){
        return "Borrando tarea";
    }

    createTask(){
        return "Creando tarea";
    }

    updateStatusTask(){
        return "actualizando estado de tarea";
    }
}
