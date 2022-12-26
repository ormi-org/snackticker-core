import { Event } from '@models/dto/gql/event';
import * as bcrypt from 'bcrypt';

/**
 * Definition of eventSession data
 */
export class EventSession {
  id!: string;
  event!: Event;
  active = false;

  /**
   * @constructor
   * @param {Event} event
   */
  constructor(event: Event) {
    this.id = bcrypt.hashSync(
      `${event.id}_${event.start}_${event.end}`,
      bcrypt.genSaltSync()
    );
    this.event = event;
  }

  /**
   * Check if the session is active both having :
   * - an handled started event
   * - being set as active in the life-cycle
   * @return {boolean}
   */
  isActive(): boolean {
    return (
      this.active &&
      this.event.start <= new Date() &&
      new Date() < this.event.end
    );
  }
}
