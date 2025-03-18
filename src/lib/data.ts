import postgres from 'postgres';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export type CellData = {
    id: string;
    row: number;
    col: number;
    userId: string;
    value: string;
    expression: string;
  };


export async function fetchCellData(col:number, row:number,userId: string) {
    try {
        // es-lint 
      const data = await sql<CellData[]>`
        SELECT * from cell_data
        WHERE cell_data.row = ${row} 
        AND cell_data.col = ${col}
        AND cell_data.userId = ${userId};
      `;
  
  
      return data[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch celldata.');
    }
  }
