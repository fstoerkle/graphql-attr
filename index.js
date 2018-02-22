const assert = require('assert')
const gql = require('graphql-tag')

const isOperation = kind => ({ operation }) => operation === kind
const toNameValue = ({ name: { value } }) => value

const parseQuery = query => {
  const { kind, definitions } = gql`
    ${query}
  `
  assert.strictEqual(kind, 'Document')
  return definitions
}

const getFieldNames = queryOp => {
  return queryOp.selectionSet.selections.map(toNameValue)
}

module.exports = {
  parse(query) {
    const ast = parseQuery(query)
    const queryOp = ast.find(isOperation('query'))
    const mutationOp = ast.find(isOperation('mutation'))

    return {
      containsField: name => getFieldNames(queryOp).includes(name),
      isQuery: () => Boolean(queryOp),
      isMutation: () => Boolean(mutationOp)
    }
  }
}
