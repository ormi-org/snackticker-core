import {Event} from '@models/dto/gql/event';
import {Injectable} from '@nestjs/common';
import {EventSession} from '@models/EventSession';

@Injectable()
/** Session life-cycle handling service */
export class SessionService {
  private sessions: Map<string, EventSession> = new Map();

  /**
   * A method for getting a unique {EventSession} by its id
   * @param {string} id
   * @return {EventSession | undefined}
   */
  getSessionById(id: string): EventSession | undefined {
    return this.sessions.get(id);
  }

  /**
   *
   * @return {EventSession[]}
   */
  getSessions(): EventSession[] {
    return Array.from(this.sessions.values());
  }

  /**
   *
   * @param {Event} event
   * @return {EventSession}
   */
  getSessionFrom(event: Event): EventSession {
    const predicate = Array.from(
        this.sessions.values(),
    ).find((_) => event.id === _.event.id);

    // Create session if it does not exist
    if (predicate !== undefined) {
      return predicate;
    }
    const newSession = new EventSession(event);
    this.sessions.set(newSession.id, newSession);
    return newSession;
  }
}
