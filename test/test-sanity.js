
var test = require('tape')
  , report = require('browserify-tape-spec')

test('useful assertion description', function(t) {
  t.plan(1)
  t.ok('a passing test')
//  t.fail('this test will fail')
  t.end()
})


