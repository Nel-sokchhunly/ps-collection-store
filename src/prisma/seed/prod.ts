import { PrismaClient, Prisma } from '@prisma-client';
import assert from 'assert';

const prisma = new PrismaClient();

// Assert environment variables exist
assert(process.env.ADMIN_EMAIL, 'ADMIN_EMAIL is required');
assert(process.env.ADMIN_PASSWORD, 'ADMIN_PASSWORD is required');
assert(process.env.ADMIN_USERNAME, 'ADMIN_USERNAME is required');

const userData: Prisma.UserCreateInput[] = [
  {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    username: process.env.ADMIN_USERNAME,
  },
];

export async function prod() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}
