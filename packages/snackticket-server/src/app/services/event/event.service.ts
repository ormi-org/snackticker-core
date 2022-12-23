import {Injectable} from '@nestjs/common';
import {Event, Prisma} from '@prisma/client';
import {PrismaService} from '../prisma.service';

@Injectable()
/** Service for Event entities manipulation */
export class EventService {
  /**
   * @constructor
   * @param {PrismaService} prisma
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * A method for getting a unique event entity by its id
   * @param {Prisma.EventWhereUniqueInput} event
   * @return {Promise<Event | null>}
   */
  getEventById(event: Prisma.EventWhereUniqueInput): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: event,
    });
  }

  /**
   * A method for getting one or several event entities
   * using complex parameters and filters
   * @typedef {{
   *  skip: number,
   *  take: number,
   *  cursor: Prisma.EventWhereUniqueInput,
   *  where: Prisma.EventWhereInput,
   *  orderBy: Prisma.EventOrderByWithRelationInput
   * }} GetEventsParams
   * @param {GetEventsParams} params
   * @return {Promise<Event[]>}
   */
  getEvents(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EventWhereUniqueInput;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput;
  }): Promise<Event[]> {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.event.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * A method for persisting an event entity in database
   * @param {Prisma.EventCreateInput} data
   * @return {Promise<Event>}
   */
  createEvent(data: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({
      data,
    });
  }

  /**
   * A method for persisting modification
   * on an existing event entity in database
   * @typedef {{
   *  where: Prisma.EventWhereUniqueInput,
   *  data: Prisma.EventUpdateInput
   * }} UpdateEventParams
   * @param {UpdateEventParams} params
   * @return {Promise<Event>}
   */
  updateEvent(params: {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.EventUpdateInput;
  }): Promise<Event> {
    const {where, data} = params;
    return this.prisma.event.update({
      data,
      where,
    });
  }

  /**
   * A method for removing an existing event entity from database
   * @typedef {{
   *  deleted: true
   * }} DeleteEventSuccessOutput
   * @typedef {{
   *  deleted: false,
   *  message: string
   * }} DeleteEventFailureOutput
   * @param {Prisma.EventWhereUniqueInput} where
   * @return {Promise<DeleteEventSuccessOutput|DeleteEventFailureOutput>}
   */
  deleteEvent(
      where: Prisma.EventWhereUniqueInput,
  ): Promise<{ deleted: true } | { deleted: false; message: string }> {
    return this.prisma.event
        .delete({
          where,
        })
        .then(
            () => {
              return {deleted: true};
            },
            (err) => {
              return {deleted: false, message: err.message};
            },
        );
  }
}
