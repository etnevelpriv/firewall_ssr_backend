import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';
import { Blocked_interface } from './Models/Interfaces/Blocked.interface.js';


@Injectable()
export class AppService {
pool: Pool;

  constructor() {
this.pool = createPool({
  host: process.env.HOST_VALUE,
  user: process.env.USER_VALUE,
  password: process.env.PASSWORD_VALUE,
  port: Number(process.env.PORT_VALUE),
  database: process.env.DATABASE_VALUE
})
  }

  async getBlockeds() {
    const [response] = await this.pool.execute(
      "SELECT * FROM blocklist"
    );
    return response as Blocked_interface[];
  }
}
