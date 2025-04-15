FROM node:lts-bookworm-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --no-audit --no-fund

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]

