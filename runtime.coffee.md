Runtime
=======

    require "appcache"

The runtime holds utilities to assist with an apps running environment.

    module.exports = (pkg) ->

Call on start to boot up the runtime, get the root node, add styles, display a
promo. Link back to the creator of this app in the promo.

      self =
        boot: ->
          if pkg?.progenitor?.url
            promo("You should meet my creator #{pkg.progenitor.url}")

          promo("Docs #{document.location.href}docs")

          return self

Apply the stylesheet to the root node.

        applyStyleSheet: (style, className="runtime") ->
          styleNode = document.createElement("style")
          styleNode.innerHTML = style
          styleNode.className = className

          if previousStyleNode = document.head.querySelector("style.#{className}")
            previousStyleNode.parentNode.removeChild(prevousStyleNode)

          document.head.appendChild(styleNode)

          return self

Helpers
-------

Display a promo in the console.

    promo = (message) ->
      console.log("%c #{message}", """
        background: #000;
        color: white;
        font-size: 2em;
        line-height: 2em;
        padding: 10px 100px;
        margin-bottom: 1em;
        text-shadow:
          0 0 0.05em #fff,
          0 0 0.1em #fff,
          0 0 0.15em #fff,
          0 0 0.2em #ff00de,
          0 0 0.35em #ff00de,
          0 0 0.4em #ff00de,
          0 0 0.5em #ff00de,
          0 0 0.75em #ff00de;'
      """)
