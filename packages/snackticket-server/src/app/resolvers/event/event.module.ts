import {Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {EventService} from '@services/event/event.service';
import {PrismaService} from '@services/prisma.service';
import {EventResolver} from './event.resolver';

@Module({
  imports: [],
  providers: [ConfigService, PrismaService, EventService, EventResolver],
})
/** Child module for event entities management */
export class EventModule {}
