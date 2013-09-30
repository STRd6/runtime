Runtime = require "../runtime"

describe "Runtime", ->
  it "should be created from a package and provide a boot method", ->
    assert Runtime(PACKAGE).boot
