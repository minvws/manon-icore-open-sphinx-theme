import os

__version__ = "0.1.0"


def setup(app):
    root_path = os.path.abspath(os.path.dirname(__file__))
    theme_path = os.path.join(root_path, "theme/sphinx_icore_open")
    print(f"Registering theme path: {theme_path}")

    app.add_html_theme("sphinx_icore_open", theme_path)

    return {"parallel_read_safe": True, "parallel_write_safe": True}
