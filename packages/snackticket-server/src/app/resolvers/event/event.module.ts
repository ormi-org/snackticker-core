import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EventService } from '@services/event/event.service';
import { PrismaService } from '@services/prisma.service';
import { EventResolver } from './event.resolver';
import { SessionService } from '@services/event/session/session.service';

@Module({
  imports: [],
  providers: [
    ConfigService,
    PrismaService,
    EventService,
    EventResolver,
    SessionService,
  ],
})
/** Child module for event entities management */
export class EventModule {}
