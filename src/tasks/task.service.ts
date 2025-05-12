import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService{

    private tasks: any[] = [];

    getTasks(){
        return this.tasks;
    }

    getTask(id : number){
        //buscamos la tarea por id
        const taskFound = this.tasks.find((task) => task.id === id);

        if(!taskFound){
            return "No se ha encontrado la tarea";
        }
        return taskFound;
    }

    createTask(task :any)
    {   
        console.log(task);
        this.tasks.push({
            ...task,
            id : this.tasks.length + 1,
        });
        return task;
    }

    updateTask(){
        return "Actualizando tarea";
    }

    deleteTask(){
        return "Borrando tarea";
    }


    updateStatusTask(){
        return "actualizando estado de tarea";
    }
}
