// import { Knex } from 'knex';

// const config: { [key: string]: Knex.Config } = {
//   development: {
//     client: 'pg', // or 'mysql', 'sqlite3'
//     connection: {
//       host: 'localhost',
//       user: 'postgres',
//       password: '123',
//       database: 'venueease_db',
//     },
//   },
//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//   },
// };

// export default config;


import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '123',
      database: 'venueease_db',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL as string,
  },
};

export default config;
export type KnexConfig = typeof config;
