import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome(): string {
    return '¡Bienvenido a la página de inicio!';
  }
}
