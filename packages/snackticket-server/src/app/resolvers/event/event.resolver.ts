import { Args, Resolver, Query, Mutation, InputType, Field } from '@nestjs/graphql';
import { Event } from '@models/gql/event';
import { EventService } from '@services/event/event.service';
import { Prisma } from '@prisma/client';

@InputType()
class CreateEventInput extends Event {
  @Field()
  declare name: string;
  @Field()
  declare start: Date;
  @Field()
  declare end: Date;
  @Field()
  declare place: string;
}

@InputType()
class UniqueEventFetchingInput {
  @Field()
  id?: string;
}

@InputType()
class EventOrderByWithRelationInput {
  @Field(() => String, { nullable: true })
  id?: Prisma.SortOrder;
  @Field(() => String, { nullable: true })
  name?: Prisma.SortOrder;
  @Field(() => String, { nullable: true })
  start?: Prisma.SortOrder;
  @Field(() => String, { nullable: true })
  end?: Prisma.SortOrder;
  @Field(() => String, { nullable: true })
  place?: Prisma.SortOrder;
  @Field(() => String, { nullable: true })
  Event_Ticket?: Prisma.Event_TicketOrderByRelationAggregateInput;
}

@Resolver(Event)
export class EventResolver {
  constructor(private eventService: EventService) {}

  @Query(() => Event)
  event(@Args('id', { type: () => String }) id: string) {
    return this.eventService.getEventById({ id: id });
  }

  @Query(() => [Event])
  events(
    @Args('skip', { type: () => Number })
    skip: number,
    @Args('take', { type: () => Number })
    take: number,
    @Args('orderBy', { type: () => EventOrderByWithRelationInput })
    orderBy: EventOrderByWithRelationInput,
    @Args('cursor', { type: () => UniqueEventFetchingInput, nullable: true })
    cursor?: UniqueEventFetchingInput
  ) {
    return this.eventService.getEvents({
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  @Query(() => [Event])
  activeEvents(
    @Args('skip', { type: () => Number })
    skip: number,
    @Args('take', { type: () => Number })
    take: number,
    @Args('orderBy', { type: () => EventOrderByWithRelationInput })
    orderBy: EventOrderByWithRelationInput,
    @Args('cursor', { type: () => UniqueEventFetchingInput, nullable: true })
    cursor?: UniqueEventFetchingInput
  ) {
    return this.eventService.getEvents({
      skip,
      take,
      cursor,
      where: {
        AND: [
          {
            start: {
              lte: new Date(Date.now()),
            },
          },
          {
            end: {
              gte: new Date(Date.now()),
            },
          },
        ],
      },
      orderBy
    });
  }

  @Mutation(() => Event)
  createEvent(@Args('event', { type: () => CreateEventInput }) event: Prisma.EventCreateInput) {
    return this.eventService.createEvent(event);
  }
}
