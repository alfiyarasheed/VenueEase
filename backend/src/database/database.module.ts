

// import { Module, Global } from '@nestjs/common';
// import Knex, { Knex as KnexType } from 'knex';
// import knexConfig from 'knexfile'; // Ensure correct path
// import type { Knex as KnexTypes } from 'knex'; // Import Knex types properly

// const knexInstance: KnexType = Knex(knexConfig['development'] as KnexTypes.Config); // Use KnexTypes.Config

// @Global()
// @Module({
//   providers: [
//     {
//       provide: 'KNEX_CONNECTION',
//       useValue: knexInstance,
//     },
//   ],
//   exports: ['KNEX_CONNECTION'],
// })
// export class DatabaseModule {}

import { Module, Global } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import Knex, { Knex as KnexType } from 'knex';
import knexConfig from 'knexfile';

// Create a Knex instance
const knexInstance: KnexType = Knex(knexConfig);

@Global() // Makes the module globally available
@Module({
  providers: [
    {
      provide: 'KNEX_CONNECTION', // Provide Knex connection
      useValue: knexInstance,
    },
    DatabaseService, // Ensure DatabaseService is registered
  ],
  controllers: [DatabaseController],
  exports: ['KNEX_CONNECTION', DatabaseService], // Export DatabaseService
})
export class DatabaseModule {}
