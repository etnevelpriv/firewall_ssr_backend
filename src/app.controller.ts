import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Blocked_interface } from './Models/Interfaces/Blocked.interface.js';
import { Blocked_DTO } from './Models/DTO\'s/Blocked.DTO.js';
import { isRegExp } from 'util/types';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render("index")
  async getIndex() {
    const tempObject: Blocked_interface[] = await this.appService.getBlockeds()
    return { blockeds: tempObject };
  }

  @Get("newBlocked")
  @Render("newBlocked")
  async getNewBlocked() {
  }

  @Post("newBlocked")
  @Render("newBlocked")
  async postNewBlocked(@Body() data: Blocked_DTO) {
    const macRegex = /^([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}$/
    let isMacErr = false;
    let isPriorityErr = false;
    let isEnabledErr = false;
    let isErr = false;
    let macMessage = "The MAC address is not in the right format."
    let priorityMessage = "The priority should be a number"
    let enabledMessage = "Enable can only hold bool"
    let baseMessage = "Please check if all inputs are correct."
    if (!data.mac.trim().match(macRegex)) {
      isMacErr = true;
      isErr = true;
    };
    if ((data.priority.trim() == "") || (Number(data.priority) == null) || (Number.isNaN(Number(data.priority)))) {
      isPriorityErr = true;
      isErr = true;
    }
    if (!isErr) {
      this.appService.postBlocked(data.mac .trim(), Number(data.priority), Boolean(data.enabled));
    };
    console.log(Number(data.priority), Boolean(data.enabled))
    return {
      macErrMessage: isMacErr ? macMessage : null,
      priorityErrMessage: isPriorityErr ? priorityMessage : null,
      enabledErrMessage: isEnabledErr ? enabledMessage : null,
      baseErrMessage: isErr ? baseMessage : null
    }
  }
}
