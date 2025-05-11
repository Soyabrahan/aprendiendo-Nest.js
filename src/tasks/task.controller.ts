import { Controller, Get } from "@nestjs/common";

@Controller({}) // Path base
export class TasksController {
    @Get("/tasks") // Ruta relativa: GET /tasks
    getAllTasks() {
        return 'obteniendo todas las tareas';
    }
}