import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import {EventResolver} from '@resolvers/event/event.resolver';
import {printSchema} from 'graphql';

import {NestFactory} from '@nestjs/core';
import {mkdirSync, writeFileSync} from 'fs';
import {join} from 'path';

/**
 * Utility function for generating GraphQL schema file
 */
async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([EventResolver]);

  mkdirSync(join(process.cwd(), '/dist/graphql'), {recursive: true});
  writeFileSync(
      join(process.cwd(), '/dist/graphql/schema.gql'), printSchema(schema),
  );
}

generateSchema();
