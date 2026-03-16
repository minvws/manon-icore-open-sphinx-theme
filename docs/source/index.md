# Manon: a Sphinx theme

## Features

- **Accessibility Focused**: High emphasis on accessibility, including semantic
  HTML structure and ARIA labels.
- **Enhanced Styling**: Custom-tailored styles for common Sphinx elements:
  - **Admonitions**: Improved visual presentation for warnings, notes, and tips.
  - **Code Blocks**: Better alignment and styling for highlighted code snippets.
  - **Pagination**: Modernized "Previous" and "Next" navigation links.
  - **Print-friendly**: Dedicated print styles to ensure documentation looks
    good on paper.
- **Configurable**: Easily toggle sidebar/footer components and customize logos,
  slogans, and metadata via `html_theme_options`.
- **Responsive**: Fully responsive layout that adapts to desktop, tablet, and
  mobile devices.

## Implementation notes

- **Custom Translator**: The theme employs a custom Sphinx translator
  (`CustomHTMLTranslator`) to optimize the rendering of specific elements, such
  as wrapping admonition titles for improved styling.
- **Alabaster Base**: It inherits from the Alabaster theme, leveraging its
  stable core while providing a completely custom visual layer through SCSS.
- **MyST-Parser Integration**: Designed to work seamlessly with the
  [MyST-Parser](https://myst-parser.readthedocs.io/) for Markdown support.

```{toctree}
:hidden:
:maxdepth: 1

installation.md
customization.md
manon.md
```
