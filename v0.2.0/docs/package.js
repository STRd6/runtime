(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "runtime\n=======\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.2.0\"\nentryPoint: \"runtime\"\n",
      "type": "blob"
    },
    "runtime.coffee.md": {
      "path": "runtime.coffee.md",
      "mode": "100644",
      "content": "The runtime holds utilities to assist with an apps running environment.\n\nIt should me moved into it's own component one day.\n\n    Runtime = (pkg) ->\n\nHold on to a reference to our root node.\n\n      root = null\n\nReturns the node that is the parent of the script element that contains the code\nthat calls this function. If `document.write` has been called before this then the\nresults may not be accurate. Therefore be sure to call currentNode before\nwriting anything to the document.\n\n      currentNode = ->\n        target = document.documentElement\n\n        while (target.childNodes.length and target.lastChild.nodeType == 1)\n          target = target.lastChild\n\n        return target.parentNode\n\nDisplay a promo in the console linking back to the creator of this app.\n\n      promo = ->\n        console.log(\"%c You should meet my creator #{pkg.progenitor.url}\", \"\"\"\n          background: #000;\n          color: white;\n          font-size: 2em;\n          line-height: 2em;\n          padding: 10px 100px;\n          margin-bottom: 1em;\n          text-shadow:\n            0 0 0.05em #fff,\n            0 0 0.1em #fff,\n            0 0 0.15em #fff,\n            0 0 0.2em #ff00de,\n            0 0 0.35em #ff00de,\n            0 0 0.4em #ff00de,\n            0 0 0.5em #ff00de,\n            0 0 0.75em #ff00de;'\n        \"\"\")\n\nCall on start to boot up the runtime, get the root node, add styles, display a\npromo.\n\n      boot: ->\n        root = currentNode()\n\n        promo()\n\n        return root\n\nApply the stylesheet to the root node.\n\n      applyStyleSheet: (style) ->\n        styleNode = document.createElement(\"style\")\n        styleNode.innerHTML = style\n\n        root.appendChild(styleNode)\n\nExport\n\n    module.exports = Runtime\n",
      "type": "blob"
    },
    "test/runtime.coffee": {
      "path": "test/runtime.coffee",
      "mode": "100644",
      "content": "Runtime = require \"../runtime\"\n\ndescribe \"Runtime\", ->\n  it \"should be created from a package and provide a boot method\", ->\n    assert Runtime(PACKAGE).boot\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.0\",\"entryPoint\":\"runtime\"};",
      "type": "blob"
    },
    "runtime": {
      "path": "runtime",
      "content": "(function() {\n  var Runtime;\n\n  Runtime = function(pkg) {\n    var currentNode, promo, root;\n    root = null;\n    currentNode = function() {\n      var target;\n      target = document.documentElement;\n      while (target.childNodes.length && target.lastChild.nodeType === 1) {\n        target = target.lastChild;\n      }\n      return target.parentNode;\n    };\n    promo = function() {\n      return console.log(\"%c You should meet my creator \" + pkg.progenitor.url, \"background: #000;\\ncolor: white;\\nfont-size: 2em;\\nline-height: 2em;\\npadding: 10px 100px;\\nmargin-bottom: 1em;\\ntext-shadow:\\n  0 0 0.05em #fff,\\n  0 0 0.1em #fff,\\n  0 0 0.15em #fff,\\n  0 0 0.2em #ff00de,\\n  0 0 0.35em #ff00de,\\n  0 0 0.4em #ff00de,\\n  0 0 0.5em #ff00de,\\n  0 0 0.75em #ff00de;'\");\n    };\n    return {\n      boot: function() {\n        root = currentNode();\n        promo();\n        return root;\n      },\n      applyStyleSheet: function(style) {\n        var styleNode;\n        styleNode = document.createElement(\"style\");\n        styleNode.innerHTML = style;\n        return root.appendChild(styleNode);\n      }\n    };\n  };\n\n  module.exports = Runtime;\n\n}).call(this);\n\n//# sourceURL=runtime.coffee",
      "type": "blob"
    },
    "test/runtime": {
      "path": "test/runtime",
      "content": "(function() {\n  var Runtime;\n\n  Runtime = require(\"../runtime\");\n\n  describe(\"Runtime\", function() {\n    return it(\"should be created from a package and provide a boot method\", function() {\n      return assert(Runtime(PACKAGE).boot);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/runtime.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.2.0",
  "entryPoint": "runtime",
  "repository": {
    "id": 13202878,
    "name": "runtime",
    "full_name": "STRd6/runtime",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://1.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/runtime",
    "description": "",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/runtime",
    "forks_url": "https://api.github.com/repos/STRd6/runtime/forks",
    "keys_url": "https://api.github.com/repos/STRd6/runtime/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/runtime/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/runtime/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/runtime/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/runtime/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/runtime/events",
    "assignees_url": "https://api.github.com/repos/STRd6/runtime/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/runtime/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/runtime/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/runtime/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/runtime/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/runtime/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/runtime/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/runtime/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/runtime/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/runtime/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/runtime/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/runtime/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/runtime/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/runtime/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/runtime/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/runtime/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/runtime/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/runtime/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/runtime/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/runtime/merges",
    "archive_url": "https://api.github.com/repos/STRd6/runtime/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/runtime/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/runtime/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/runtime/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/runtime/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/runtime/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/runtime/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/runtime/releases{/id}",
    "created_at": "2013-09-30T00:44:37Z",
    "updated_at": "2013-09-30T01:02:40Z",
    "pushed_at": "2013-09-30T01:02:39Z",
    "git_url": "git://github.com/STRd6/runtime.git",
    "ssh_url": "git@github.com:STRd6/runtime.git",
    "clone_url": "https://github.com/STRd6/runtime.git",
    "svn_url": "https://github.com/STRd6/runtime",
    "homepage": null,
    "size": 180,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "v0.2.0",
    "defaultBranch": "master"
  },
  "dependencies": {}
});