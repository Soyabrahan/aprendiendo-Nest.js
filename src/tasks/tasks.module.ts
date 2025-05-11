import {Module} from "@nestjs/common";
import { TasksController } from "./task.controller";

//app.module contiene muchos modulos y un modulo contiene controladores
@Module({
    controllers:[TasksController]
})
export class TasksModule {}