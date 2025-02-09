// import { Module } from '@nestjs/common';
// import { DatabaseController } from './database/database.controller';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController, DatabaseController],
//   providers: [AppService],
// })
// export class AppModule {}

// import { Module, Global } from '@nestjs/common';
// import Knex, { Knex as KnexType } from 'knex';
// import knexConfig from 'knexfile'; // Ensure the correct path

// const knexInstance: KnexType = Knex(knexConfig);

// @Global() // Makes the module available globally
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

import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [DatabaseModule], // Import DatabaseModule
  controllers: [DatabaseController], // Ensure the controller is included
})
export class AppModule {}
