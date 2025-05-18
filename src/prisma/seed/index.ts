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

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });
