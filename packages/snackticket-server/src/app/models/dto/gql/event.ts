/* eslint-disable require-jsdoc */
import {Field, ObjectType} from '@nestjs/graphql';
import {EventMeta} from './event/meta';

@ObjectType()
export class Event {
  @Field(() => String, {description: 'Event unique identifier'})
    id!: string;

  @Field(() => String, {description: 'Event\'s name'})
    name!: string;

  @Field(() => Date, {description: 'Event start date & time'})
    start!: Date;

  @Field(() => Date, {description: 'Event end date & time'})
    end!: Date;

  @Field(() => String, {
    description: 'Place where the event is supposed to occur',
  })
    place!: string;
}

@ObjectType()
export class ActiveEvent extends Event {
  @Field(() => EventMeta, {
    description: 'Event metadata, providing data on usage basis',
  })
    metadata!: EventMeta;
}
