import app from './src/app';
import config from './src/config/config';

const PORT = config.port;

console.log(`Starting server with config:`, {
  port: PORT,
  hostname: '0.0.0.0',
  nodeEnv: process.env.NODE_ENV,
  bunEnvPort: Bun.env.PORT,
  processEnvPort: process.env.PORT,
});

const server = Bun.serve({
  port: PORT,
  hostname: '0.0.0.0',
  fetch: app.fetch,
});

console.log(`Server running at http://0.0.0.0:${PORT}`);
