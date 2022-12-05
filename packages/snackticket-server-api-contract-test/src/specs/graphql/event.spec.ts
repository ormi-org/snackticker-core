import { run } from 'newman';

run(
  {
    collection: require('./postman/snackticket-server-gql-event.postman_collection.json'),
    reporters: 'cli',
    environment: require('./postman/dev.postman_environment.json'),
  },
  function (err) {
    if (err) { throw err };
    console.log('Completed event collection test');
  }
);
