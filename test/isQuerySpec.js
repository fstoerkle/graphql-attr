const test = require('ava')

const { parse } = require('../index')

test('isQuery() returns true if a query is supplied', t => {
  const query = `
    query {
      aField 
    }
  `

  t.true(parse(query).isQuery())
})

test('isQuery() returns false if a mutation is supplied', t => {
  const mutation = `
    mutation {
      aField 
    }
  `

  t.false(parse(mutation).isQuery())
})
