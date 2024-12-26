###################
# BASE
###################
FROM node:lts-alpine3.21 AS base

# Create app directory
WORKDIR /app

###################
# BUILD STAGE
###################
FROM base AS build

# Copy package files
COPY --chown=node:node package.json package-lock.json ./

ENV NEXT_TELEMETRY_DISABLED=1

# Install all dependencies
RUN npm ci

# Copy the application source code
COPY --chown=node:node . .

# Build the application
RUN npm run build

###################
# PRODUCTION STAGE
###################
FROM base AS prod

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only necessary files for production
COPY --from=build /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static

# Use a non-root user for security
USER node

ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "server.js"]
