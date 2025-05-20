import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {
  @Get('/api/hello')
  index() {
    return 'Holaaa pendejos';
  }
}
