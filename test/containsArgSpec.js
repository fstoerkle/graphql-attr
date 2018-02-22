const test = require('ava')

const { parse } = require('../src')

const query = `
  query {
    robot(name: "wall-e") {
      name
    }
  }
`

const attrs = parse(query)

test('containsArg() returns true if the query contains the argument', t => {
  t.true(attrs.containsArg('name'))
})

test('containsArg() returns true if the query contains the argument with a value', t => {
  t.true(attrs.containsArg('name', 'wall-e'))
})

test('containsArg() returns false if the query contains the argument but with different value', t => {
  t.false(attrs.containsArg('name', 'wall-street'))
})

test('containsArg() returns false if the query does not contain the argument', t => {
  t.false(attrs.containsArg('age'))
})
