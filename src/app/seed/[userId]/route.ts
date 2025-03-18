import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedCells(userId: string) {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS cell_data (
      
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      row INT NOT NULL,
      col INT NOT NULL,
      value VARCHAR(255) NOT NULL,
      expression VARCHAR(255),
      userId VARCHAR(255) NOT NULL
    );
  `;


  await Promise.all(
    Array.from(new Array(600)).map(async (_, x) => {
      await Promise.all(Array.from(new Array(600)).map(async (_, y) => {
        return sql`
        INSERT INTO cell_data (row, col, value, userId)
        VALUES (${x}, ${y}, ${x * y}, ${userId})
        ON CONFLICT (id) DO NOTHING;
      `;
      }))

    }),
  );
}
export async function GET(request: Request,
  { params }: { params: Promise<{ userId: string }> }) {

  const { userId } = await params;

  try {
    await sql.begin(() => [
      seedCells(userId),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}
