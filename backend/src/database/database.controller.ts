// import { Controller, Get, Inject } from '@nestjs/common';
// import { Knex } from 'knex';

// @Controller('database')
// export class DatabaseController {
//   constructor(@Inject('KNEX_CONNECTION') private readonly knex: Knex) {}

//   @Get('test')
//   async testConnection() {
//     try {
//       const result = await this.knex.raw<{ rows: { result: number }[] }>(
//         'SELECT 1+1 AS result',
//       );

//       return {
//         success: true,
//         message: 'Database connected',
//         result: result.rows,
//       };
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         return {
//           success: false,
//           message: 'Database connection failed',
//           error: error.message,
//         };
//       }
//       return {
//         success: false,
//         message: 'Database connection failed',
//         error: 'Unknown error',
//       };
//     }
//   }
// }

import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('/venues')
  async getAllVenues() {
    return this.databaseService.getAllVenues();
  }

  @Get('/venues/:id')
  async getVenueById(@Param('id') id: number) {
    return this.databaseService.getVenueById(id);
  }

  @Post('/venues')
  async createVenue(@Body() data: { name: string; location: string; capacity: number }) {
    return this.databaseService.createVenue(data);
  }

  @Put('/venues/:id')
  async updateVenue(@Param('id') id: number, @Body() data: Partial<{ name: string; location: string; capacity: number }>) {
    return this.databaseService.updateVenue(id, data);
  }

  @Delete('/venues/:id')
  async deleteVenue(@Param('id') id: number) {
    return this.databaseService.deleteVenue(id);
  }
}
