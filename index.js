const assert = require('assert')
const gql = require('graphql-tag')

const parseQuery = query => {
  const ast = gql`
    ${query}
  `
  assert.strictEqual(ast.kind, 'Document')
  return ast
}

const getSelections = query => {
  const ast = parseQuery(query)
  const queryDef = ast.definitions.find(
    ({ operation }) => operation === 'query'
  )
  return queryDef.selectionSet.selections
}

const getSelectionFieldNames = query => {
  const selections = getSelections(query)
  return selections.map(({ name }) => name.value)
}

module.exports = {
  parse(query) {
    return {
      containsField(field) {
        const fields = getSelectionFieldNames(query)

        return fields.includes(field)
      }
    }
  }
}
