# Developing

You have two options for setting up a development environment: using Docker or
setting up a local environment with `uv`.

## With docker

You can use the provided `Dockerfile` to build a Docker image for development.

```console
# Build the Docker image
docker build -t sphinx-icore-open .

# Run a container with the image
docker run -p 8000:8000 -it --rm -v $(pwd):/app -v /app/node_modules sphinx-icore-open
```

## With uv

For the sphinx theme developmen Make sure you have
[`uv`](https://docs.astral.sh/uv/) installed. You will also need
[Node.js](https://nodejs.org/) to build the static assets.

You can test the theme using `sphinx-autobuild` to serve the documentation
locally with live reloading.

```console
# To start a local server with live reloading, run:
uv run sphinx-autobuild docs/source docs/build/html
```

## Building Static Assets

The theme's static assets (CSS, JavaScript) are built using Node.js tools.
Install the necessary Node.js dependencies by running:

```console
npm install
```

To update the changes made to the static files, run:

```console
npm run build
```

## Deployment

This package is deployed to
[PyPI](https://pypi.org/project/sphinx-rijkshuisstijl-2008-theme/) using GitHub
Actions.

### Automated Deployment

The deployment process is triggered automatically when a new version tag (e.g.,
`v1.0.0`) is pushed to the repository:

1.  Create and push a new tag:
    ```console
    git tag v1.0.0
    git push origin v1.0.0
    ```
2.  The GitHub Action `Publish` will:
    - Build the static assets (`npm run build`).
    - Build the Python package using `uv build`.
    - Publish the package to PyPI using `uv publish` with Trusted Publishing.

### Manual Deployment

You can also trigger a manual deployment from the **Actions** tab in the GitHub
repository by selecting the **Publish** workflow and clicking **Run workflow**.
