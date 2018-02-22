const test = require('ava')

const { parse } = require('../index')

test('isMutation() returns true if a mutation is supplied', t => {
  const mutation = `
    mutation {
      aField 
    }
  `

  t.true(parse(mutation).isMutation())
})

test('isMutation() returns false if a query is supplied', t => {
  const query = `
    query {
      aField 
    }
  `

  t.false(parse(query).isMutation())
})
