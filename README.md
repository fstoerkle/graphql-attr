# graphql-attr

[![Build Status](https://api.travis-ci.org/fstoerkle/graphql-attr.svg?branch=master)](https://api.travis-ci.org/fstoerkle/graphql-attr) [![Greenkeeper badge](https://badges.greenkeeper.io/fstoerkle/graphql-attr.svg)](https://greenkeeper.io/)

Get attributes of GraphQL queries


## Queries

### Test that a field is selected in a query

```javascript
const { parse } = require('graphql-attr');

parse('query { email }').containsField('email') // → true
parse('query { email }').isMutation() // → false
```

## License

MIT
