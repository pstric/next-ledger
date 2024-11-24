// import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
// import { invoices, customers, revenue, users } from '../lib/placeholder-data';
import { cities, chains, stores } from '../lib/placeholder-data';

const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

// async function seedInvoices() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       customer_id UUID NOT NULL,
//       amount INT NOT NULL,
//       status VARCHAR(255) NOT NULL,
//       date DATE NOT NULL
//     );
//   `;

//   const insertedInvoices = await Promise.all(
//     invoices.map(
//       (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedInvoices;
// }

// async function seedCustomers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS customers (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedCustomers = await Promise.all(
//     customers.map(
//       (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedCustomers;
// }

// async function seedRevenue() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `;

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedRevenue;
// }

async function seedCities() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS cities (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      zip VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL
    );
  `;

  const insertedCities = await Promise.all(
    cities.map(
      (city) => client.sql`
        INSERT INTO cities (id, zip, name)
        VALUES (${city.id}, ${city.zip}, ${city.name})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCities;
}

async function seedChains() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS chains (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  const insertedChains = await Promise.all(
    chains.map(
      (chain) => client.sql`
        INSERT INTO chains (id, name)
        VALUES (${chain.id}, ${chain.name})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedChains;
}

async function seedStores() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS stores (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      address VARCHAR(255) NOT NULL
    );
  `;

  const insertedStores = await Promise.all(
    stores.map(
      (store) => client.sql`
        INSERT INTO stores (id, address)
        VALUES (${store.id}, ${store.address})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedStores;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    // await seedCities();
    // await seedChains();
    await seedStores();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
