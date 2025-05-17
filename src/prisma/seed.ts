import { PrismaClient, Prisma } from '@prisma-client';

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
  {
    name: 'Product 1',
    buyPrice: 3,
    sellPrice: 5,
    sku: 'P-00001',
  },
];

export async function main() {
  for (const u of productData) {
    await prisma.product.create({ data: u });
  }
}

main();
