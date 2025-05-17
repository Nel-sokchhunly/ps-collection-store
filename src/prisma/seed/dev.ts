import { PrismaClient, Prisma } from '@prisma-client';
import assert from 'assert';

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
  {
    name: 'Product 1',
    buyPrice: 3,
    sellPrice: 5,
    sku: 'P-00001',
  },
];

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

export async function dev() {
  for (const u of productData) {
    await prisma.product.create({ data: u });
  }

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}
