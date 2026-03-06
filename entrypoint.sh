#!/usr/bin/env bash

# Start sphinx-autobuild in the foreground
uv run sphinx-autobuild docs/source docs/build/html --host 0.0.0.0 --port 8000 --watch src/
