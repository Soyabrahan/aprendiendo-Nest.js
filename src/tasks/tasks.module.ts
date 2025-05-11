import {Module} from "@nestjs/common";
import { TasksController } from "./task.controller";
import { TasksService } from "./task.service";

//app.module contiene muchos modulos y un modulo contiene controladores
@Module({
    controllers:[TasksController],
    providers : [TasksService],
})
export class TasksModule {}