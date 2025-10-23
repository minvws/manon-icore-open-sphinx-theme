def register_translator(app) -> None:
    """
    Register the custom HTML translator with Sphinx.
    """

    # Import here to avoid ImportError when installing the package without Sphinx
    from docutils import nodes
    from sphinx.writers.html import HTMLTranslator

    class CustomHTMLTranslator(HTMLTranslator):
        def visit_title(self, node) -> None:
            """Overrides the default title visitor.
            This method checks if a title is inside an admonition. If it is,
            it wraps the title text in a `<span>` tag to allow for custom
            styling, and then prevents further processing of the node.
            For all other titles, it calls the original `visit_title` method
            to ensure default rendering.
            """
            if isinstance(node.parent, nodes.Admonition):
                self.body.append(f"<span>{node.astext()}</span>")
                raise nodes.SkipNode
            else:
                super().visit_title(node)

    # Register translator for all HTML builders
    app.set_translator("html", CustomHTMLTranslator)
    app.set_translator("html5", CustomHTMLTranslator)
