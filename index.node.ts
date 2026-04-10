import { serve } from '@hono/node-server';
import app from './src/app';
import config from './src/config/config';

const PORT = config.port;

serve({
  fetch: app.fetch,
  port: PORT,
  hostname: '0.0.0.0',
});

console.log(`Server running at http://0.0.0.0:${PORT}`);
