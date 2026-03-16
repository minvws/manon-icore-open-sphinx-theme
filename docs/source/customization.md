# Customization

The Sphinx Rijkshuisstijl 2008 Theme behavior and style can be customized in
multiple ways:

- Various template-level settings can be configured via `html_theme_options` in
  your `conf.py`.
- You can provide your own CSS stylesheet overrides for minor modifications.

## Custom stylesheet

If you need to modify the default CSS styles in a way not covered by the theme
options, you can provide a custom CSS stylesheet as follows:

1. Create a file named `custom.css` (typically in `_static/`).
2. Add your desired CSS overrides.
3. Set the `html_static_path` in `conf.py` to include the directory where
   `custom.css` is located.

## Theme options

The theme's primary configuration route is the `html_theme_options` variable in
`conf.py`.

```python
html_theme_options = {
    "logo_text": "Project Name",
    "slogan": "Project Slogan",
    "show_copyright_privacy_block_footer": True,
    "copyright_url": "/copyright.html",
    "privacy_url": "/privacy.html",
    "home_url": "/",
}
```

### Basics

Settings related to text display and logo.

- `logo`: Relative path to a logo image. Defaults to `/_static/img/ro-logo.svg`.
- `logo_text`: Text to appear next to or under the logo.
- `slogan`: A project slogan to appear in the footer.
- `home_url`: URL for the home link in the header. Defaults to `/`.

### Footer

Settings related to the copyright and privacy information in the footer.

- `show_copyright_privacy_block_footer`: Set to `True` to show the copyright and
  privacy block in the footer.
- `copyright_url`: URL for the copyright page. Defaults to an empty string.
- `privacy_url`: URL for the privacy page. Defaults to an empty string.
- `meta_footer`: A blurb of text to appear in the metadata footer section.
