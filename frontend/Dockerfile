FROM node:lts-bookworm-slim

WORKDIR /app

# Set environment variables
ENV NODE_ENV=development
ENV VITE_HOST=0.0.0.0

# Copy package files
COPY package*.json ./

# Clean install dependencies
RUN npm install --no-audit --no-fund

COPY . .

EXPOSE 5173

# Use host flag to allow external connections
CMD ["npm", "run", "dev", "--", "--host"]
