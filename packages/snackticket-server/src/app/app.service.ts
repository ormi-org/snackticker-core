import {Injectable} from '@nestjs/common';

@Injectable()
/** Generic service for application */
export class AppService {
  /**
   * A method providing healtcheck data
   * @return {{message:string}}
   */
  getHealth(): { message: string } {
    return {message: 'Welcome to snackticket-server!'};
  }
}
