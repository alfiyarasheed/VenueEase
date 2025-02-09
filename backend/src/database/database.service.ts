import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class DatabaseService {
  constructor(@Inject('KNEX_CONNECTION') private readonly knex: Knex) {}

  // Fetch all venues
  async getAllVenues() {
    return this.knex('venues').select('*');
  }

  // Fetch a single venue by ID
  async getVenueById(id: number) {
    return this.knex('venues').where({ id }).first();
  }

  // Create a new venue
  async createVenue(data: { name: string; location: string; capacity: number }) {
    return this.knex('venues').insert(data).returning('*');
  }

  // Update a venue
  async updateVenue(id: number, data: Partial<{ name: string; location: string; capacity: number }>) {
    return this.knex('venues').where({ id }).update(data).returning('*');
  }

  // Delete a venue
  async deleteVenue(id: number) {
    return this.knex('venues').where({ id }).del();
  }
}
