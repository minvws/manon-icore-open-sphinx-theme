# Installation

## Requirements

The Sphinx Rijkshuisstijl 2008 Theme requires **Sphinx 8.2 or newer**.

> **Note** You will need to explicitly enable the theme in your Sphinx config by
> adding this line to your `conf.py`:

```python
html_theme = "sphinx_icore_open"
```

## Extensions

The Sphinx Rijkshuisstijl 2008 Theme works well with standard Sphinx extensions:

```python
extensions = [
    "sphinx.ext.extlinks",
    "myst_parser",
]
```

- See the
  [Sphinx Markdown docs](https://www.sphinx-doc.org/en/master/usage/markdown.html)
  for details on using MyST-Parser.
- See the
  [Sphinx extlinks docs](https://www.sphinx-doc.org/en/master/usage/extensions/extlinks.html)
  for details on the extlinks extension.

## Static path for images & custom stylesheet

If you're using any of the image-related options listed on
[Customization](customization.md) (`logo`) or a
[custom stylesheet](customization.md), you'll also want to tell Sphinx where to
get these files from. Add a line like this to your `conf.py` (changing the path
if necessary):

```python
html_static_path = ["_static"]
```
