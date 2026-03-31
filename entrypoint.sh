#!/usr/bin/env bash
set -e

npm ci

# Run vite build --watch in the background to rebuild assets on change
npm run dev &

# Start sphinx-autobuild in the foreground
uv run sphinx-autobuild docs/source docs/build/html -E --host 0.0.0.0 --port 8000 --watch src/
