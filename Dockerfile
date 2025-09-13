# Use Node Alpine image
FROM node:24-alpine AS base

# Set working directory
WORKDIR /src

# Copy package files and prisma folder first
COPY package.json ./ 
COPY prisma ./prisma

# Install dependencies (runs prisma generate safely now)
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port and run
EXPOSE 3000
CMD ["npm", "run", "dev"]
