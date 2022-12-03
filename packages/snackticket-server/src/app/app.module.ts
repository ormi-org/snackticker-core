import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from '@resolvers/event/event.module';

const ENV = process.env['ENV'];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV ? '.env' : `.env.${ENV}`
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      debug: true,
      playground: true,
      include: [EventModule],
      path: '/api/graphql'
    }),
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
