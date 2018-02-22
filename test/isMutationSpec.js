const test = require('ava')

const { parse } = require('../index')

test('isMutation() returns true if a mutation is supplied', t => {
  const mutation = `
    mutation {
      aField 
    }
  `
  const attrs = parse(mutation)

  t.true(attrs.isMutation())
})

test('isMutation() returns false if a query is supplied', t => {
  const query = `
    query {
      aField 
    }
  `
  const attrs = parse(query)

  t.false(attrs.isMutation())
})
