import { dev } from './dev';
import { prod } from './prod';

const seed = async () => {
  const env = process.env.NODE_ENV || 'development';

  if (env === 'production') {
    await prod();
  } else {
    await dev();
  }
};

seed().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
