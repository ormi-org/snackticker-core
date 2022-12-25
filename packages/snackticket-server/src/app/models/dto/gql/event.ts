/* eslint-disable require-jsdoc */
import {Field, ObjectType} from '@nestjs/graphql';

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
