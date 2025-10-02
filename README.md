# Sphinx iCore Open Theme

A visually clean, responsive, and configurable theme for
[Sphinx](https://www.sphinx-doc.org), built with the
[Manon](https://github.com/minvws/nl-rdo-manon) design framework.

## Overview

The `sphinx_icore_open` theme is part of the iCore Manon Sphinx theme
collection, providing a modern and accessible documentation experience.

## Features

- **Clean and Modern Design**: Based on the Manon design framework
- **Accessibility Focused**: Built with accessibility best practices in mind
- **Customizable**: Configurable theme options and styling

## Installation

### Install Theme Package

```console
pip install sphinx_icore_open
```

### Configure Theme

Update your `conf.py` file:

```python
html_theme = "sphinx_icore_open"
```

## Developing

You have two options for setting up a development environment: using Docker or
setting up a local environment with `uv`.

### With docker

You can use the provided `Dockerfile` to build a Docker image for development.

```console
# Build the Docker image
docker build -t sphinx-icore-open .

# Run a container with the image, mounting the current directory
docker run -p 8000:8000 -it --rm -v $(pwd):/app sphinx-icore-open
```

### With uv

For the sphinx theme developmen Make sure you have
[`uv`](https://docs.astral.sh/uv/) installed. You will also need
[Node.js](https://nodejs.org/) to build the static assets.

#### Setting Up the Environment

To set up a development environment:

```console
# Create and activate a virtual environment
uv venv
source .venv/bin/activate

# Install development dependencies
uv pip install -e .[dev]
```

### Building Static Assets

The theme's static assets (CSS, JavaScript) are built using Node.js tools.
Install the necessary Node.js dependencies by running:

```console
npm install
```

To update the changes made to the static files, run:

```console
npm run build
```

### Testing the Theme

You can test the theme using `sphinx-autobuild` to serve the documentation
locally with live reloading.

```console
# First activate the virtual environment if not already active
source .venv/bin/activate

# To start a local server with live reloading, run:
sphinx-autobuild docs/source docs/build/html

# Deactivate the virtual environment when done
deactivate
```

## License

This theme follows the [REUSE Specification v3.2](https://reuse.software/spec/).
Please see [REUSE.toml](./REUSE.toml), [LICENSES/](./LICENSES/) and the
individual `*.license` files for copyright and license information.
