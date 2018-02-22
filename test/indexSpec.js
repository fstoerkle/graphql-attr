const test = require('ava')

const { parse } = require('../index')

test('parse() returns an attr object for a valid query', t => {
  const validQuery = `
    query {
      aField 
    }
  `
  const attrs = parse(validQuery)

  t.is(typeof attrs.containsField, 'function')
})

test('parse() throws an error if given an invalid query', t => {
  const invalidQuery = `
    this is not a valid query {
      right?
    }
  `

  t.throws(() => parse(invalidQuery))
})
