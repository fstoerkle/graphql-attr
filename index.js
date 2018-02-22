const assert = require('assert')
const gql = require('graphql-tag')

const isQueryOperation = ({ operation }) => operation === 'query'
const toNameValue = ({ name: { value } }) => value

const parseQuery = query => {
  const { kind, definitions } = gql`
    ${query}
  `
  assert.strictEqual(kind, 'Document')
  return definitions
}

const getFieldNames = query => {
  const ast = parseQuery(query)
  const queryOp = ast.find(isQueryOperation)
  return queryOp.selectionSet.selections.map(toNameValue)
}

module.exports = {
  parse(query) {
    return {
      containsField: field => getFieldNames(query).includes(field)
    }
  }
}
