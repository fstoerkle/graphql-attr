const test = require('ava')

const { parse } = require('../index')

const query = `
  query {
    aField 
  }
`

const attrs = parse(query)

test('contains() returns true if the query contains the field', t => {
  t.true(attrs.containsField('aField'))
})

test('contains() returns false if the query does not contain the field', t => {
  t.false(attrs.containsField('does not exist'))
})
