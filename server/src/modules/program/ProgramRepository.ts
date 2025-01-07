import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type program = {
  id: number;
  name: string;
};

class ProgramRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from category");

    // Return the array of categories
    return rows as program[];
  }
}

export default new ProgramRepository();
