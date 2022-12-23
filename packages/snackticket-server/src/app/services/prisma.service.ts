import {INestApplication, Injectable, OnModuleInit} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {PrismaClient} from '@prisma/client';

@Injectable()
/** Service for Database stored entities entrypoint */
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * @constructor
   * @param {ConfigService} config
   */
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL') || '',
        },
      },
    });
  }

  /**
   * Module init event Hook
   */
  onModuleInit() {
    this.$connect();
  }

  /**
   * A method for adding autoshutdown subroutine
   * @param {INestApplication} app
   */
  enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      app.close();
    });
  }
}
