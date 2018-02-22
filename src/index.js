const assert = require('assert')
const gql = require('graphql-tag')

const isOperation = kind => ({ operation }) => operation === kind
const flattenNameValue = ({ name, value = {} }) => ({
  name: name.value,
  value: value.value
})
const nameValueToObject = (prev, { name, value }) =>
  Object.assign(prev, { [name]: value })

const parseQuery = query => {
  const ast = gql`
    ${query}
  `
  const { kind, definitions } = ast

  assert.strictEqual(kind, 'Document')

  return definitions
}

const getFirstSelection = operation => operation.selectionSet.selections[0]

const getArguments = queryOp => {
  const { arguments } = getFirstSelection(queryOp)
  return arguments.map(flattenNameValue).reduce(nameValueToObject, {})
}

const getFieldNames = queryOp => {
  return flattenNameValue(getFirstSelection(queryOp)).name
}

module.exports = {
  parse(query) {
    const ast = parseQuery(query)
    const queryOp = ast.find(isOperation('query'))
    const mutationOp = ast.find(isOperation('mutation'))

    return {
      containsArg(name, value) {
        const shouldTestValue = arguments.length === 2
        const args = getArguments(queryOp)

        if (shouldTestValue) {
          return args[name] === value
        }

        return args.hasOwnProperty(name)
      },

      containsField(name) {
        return getFieldNames(queryOp).includes(name)
      },

      isQuery() {
        return Boolean(queryOp)
      },

      isMutation() {
        return Boolean(mutationOp)
      }
    }
  }
}
