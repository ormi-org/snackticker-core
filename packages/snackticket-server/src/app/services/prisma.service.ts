import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL') || ''
        }
      }
    });
  }

  onModuleInit() {
    this.$connect();
  }

  enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      app.close();
    });
  }
}
