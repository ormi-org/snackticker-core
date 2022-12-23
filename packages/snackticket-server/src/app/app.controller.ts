import {Controller, Get} from '@nestjs/common';

import {AppService} from './app.service';

@Controller()
/** Root controller for whole application, */
export class AppController {
  /**
   * @constructor
   * @param {AppService} appService
   */
  constructor(private readonly appService: AppService) {}

  /**
   * A method for providing healtcheck
   * @return {{message: string}}
   */
  @Get('/status')
  getHealth(): {message: string} {
    return this.appService.getHealth();
  }
}
