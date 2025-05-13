import { Injectable } from "@nestjs/common";

@Injectable()    //decorador que indica que es un servicio y que se puede inyectar en otros modulos
export class TasksService{

    private tasks: any[] = [];   //array de tareas

    getTasks(){      //retorna todas las tareas
        return this.tasks;
    }

    getTask(id : number){   //retorna una tarea por id
        //buscamos la tarea por id
        const taskFound = this.tasks.find((task) => task.id === id);

        if(!taskFound){
            return "No se ha encontrado la tarea";
        }
        return taskFound;
    }

    createTask(task :any)  //crea una tarea
    {   
        console.log(task);
        this.tasks.push({
            ...task,  //destructuramos el objeto para que no se repita
            id : this.tasks.length + 1,   //asignamos un id a la tarea
        });
        return task;
    }

    updateTask(){ //aun no se ha implementado
        return "Actualizando tarea";
    }

    deleteTask(){ //aun no se ha implementado

        return "Borrando tarea";
    }


    updateStatusTask(){ //aun no se ha implementado
        return "actualizando estado de tarea";
    }
}
