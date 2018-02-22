const test = require('ava')

const { parse } = require('../index')

test('isQuery() returns true if a query is supplied', t => {
  const query = `
    query {
      aField 
    }
  `
  const attrs = parse(query)

  t.true(attrs.isQuery())
})

test('isQuery() returns false if a mutation is supplied', t => {
  const mutation = `
    mutation {
      aField 
    }
  `
  const attrs = parse(mutation)

  t.false(attrs.isQuery())
})
