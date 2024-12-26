###################
# BASE
###################
FROM node:lts-alpine3.21 AS base

# Create app directory
WORKDIR /app

# Copy package files
COPY --chown=node:node package.json package-lock.json ./

RUN npm ci --omit=dev

###################
# BUILD STAGE
###################
FROM base AS build

ENV NEXT_TELEMETRY_DISABLED=1

# Install all dependencies
RUN npm ci

# Copy the application source code
COPY --chown=node:node . .

# Build the application
RUN npm run build

# Remove build-time dependencies and cache
RUN rm -rf /app/.next/cache

###################
# PRODUCTION STAGE
###################
FROM base AS prod

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create app directory
WORKDIR /app

# Copy only necessary files for production
COPY --from=build /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static

# Use a non-root user for security
USER node

# Start the application
CMD ["npm", "start"]
