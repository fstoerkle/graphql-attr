# graphql-test

[![Greenkeeper badge](https://badges.greenkeeper.io/fstoerkle/graphql-test.svg)](https://greenkeeper.io/)

[![Build Status](https://api.travis-ci.org/fstoerkle/graphql-test.svg?branch=master)](https://api.travis-ci.org/fstoerkle/graphql-test)

Utilities for testing GraphQL


## Queries

### Test that a field is selected in a query

```javascript
const graphqlTest = require('graphql-test');

graphqlTest.query('query { email }').contains('email');             // → true
graphqlTest.query('query { email }').contains('postal_address');    // → false
```

