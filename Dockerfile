# --- Python Stage ---
FROM python:3.13-slim

ENV NODE_VERSION=22.20.0

# Set the working directory in the container
WORKDIR /app

# Install Node.js
RUN apt-get update && apt-get install -y curl xz-utils \
    && curl -fsSL https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz \
       | tar -xJ -C /usr/local --strip-components=1 \
    && apt-get purge -y curl xz-utils \
    && rm -rf /var/lib/apt/lists/*

# Install uv
COPY --from=ghcr.io/astral-sh/uv:0.8.22 /uv /uvx /bin/

# Copy project definitions, for caching
COPY pyproject.toml uv.lock ./
COPY package.json package-lock.json ./

COPY src/ ./src/

# Install Python deps
RUN uv pip install --system .[dev]

# Install Node.js deps
RUN npm ci

# Copy files needed for runtime, but avoid re-copying the Python source
COPY docs/ ./docs/
COPY entrypoint.sh .

# Build the static assets
RUN npm run build

# Expose the port for the development server
EXPOSE 8000

CMD ["./entrypoint.sh"]
