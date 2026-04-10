# Use Bun's official image as base
FROM oven/bun:1 AS base
WORKDIR /app

# Copy package files
COPY package.json bun.lock* ./

# Install all dependencies
RUN bun install --production

# Copy source code
COPY . .

# Expose the port
EXPOSE 5000

# Set environment to production
ENV NODE_ENV=production

# Run the app
CMD ["bun", "run", "index.ts"]
