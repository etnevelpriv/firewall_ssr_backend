import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Blocked_interface } from './Models/Interfaces/Blocked.interface.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("index")
  async getHello() {
    const tempObject: Blocked_interface[] = await this.appService.getBlockeds()
    return {blockeds: tempObject};
  }
}
