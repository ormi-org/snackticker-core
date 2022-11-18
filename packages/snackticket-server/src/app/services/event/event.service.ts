import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  getEventById(event: Prisma.EventWhereUniqueInput): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: event,
    });
  }

  getEvents(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EventWhereUniqueInput;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput;
  }): Promise<Event[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.event.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  createEvent(data: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({
      data,
    });
  }

  updateEvent(params: {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.EventUpdateInput;
  }): Promise<Event> {
    const { where, data } = params;
    return this.prisma.event.update({
      data,
      where,
    });
  }

  deleteEvent(
    where: Prisma.EventWhereUniqueInput
  ): Promise<{ deleted: true } | { deleted: false, message: string }> {
    return this.prisma.event
      .delete({
        where,
      })
      .then(
        () => {
          return { deleted: true };
        },
        (err) => {
          return { deleted: false, message: err.message };
        }
      );
  }
}
