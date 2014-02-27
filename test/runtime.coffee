Runtime = require "../runtime"

describe "Runtime", ->
  it "should be created from a package and provide a boot method", ->
    assert Runtime(PACKAGE).boot()

  it "should be able to attach a style", ->
    assert Runtime().applyStyleSheet("body {background-color: lightgrey}")

  it "should work without a package", ->
    assert Runtime().boot()
