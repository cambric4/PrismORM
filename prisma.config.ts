import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';

dotenv.config(); // <-- critical

export default defineConfig({
  schema: './prisma/schema.prisma',
  out: './generated/prisma'
});
