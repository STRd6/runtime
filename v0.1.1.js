(function() {
  var Runtime;

  Runtime = function(pkg) {
    var currentNode, promo, root;
    root = null;
    currentNode = function() {
      var target;
      target = document.documentElement;
      while (target.childNodes.length && target.lastChild.nodeType === 1) {
        target = target.lastChild;
      }
      return target.parentNode;
    };
    promo = function() {
      return console.log("%c You should meet my creator " + pkg.progenitor.url, "background: #000;\ncolor: white;\nfont-size: 2em;\nline-height: 2em;\npadding: 10px 100px;\nmargin-bottom: 1em;\ntext-shadow:\n  0 0 0.05em #fff,\n  0 0 0.1em #fff,\n  0 0 0.15em #fff,\n  0 0 0.2em #ff00de,\n  0 0 0.35em #ff00de,\n  0 0 0.4em #ff00de,\n  0 0 0.5em #ff00de,\n  0 0 0.75em #ff00de;'");
    };
    return {
      boot: function() {
        root = currentNode();
        promo();
        return root;
      },
      applyStyleSheet: function(style) {
        var styleNode;
        styleNode = document.createElement("style");
        styleNode.innerHTML = style;
        return root.appendChild(styleNode);
      }
    };
  };

  module.exports = Runtime;

}).call(this);
