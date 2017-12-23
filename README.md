# graphql-test

Utilities for testing GraphQL


## Queries

### Test that a field is selected in a query

```javascript
const graphqlTest = require('graphql-test');

graphqlTest.query('query { email }').contains('email');             // → true
graphqlTest.query('query { email }').contains('postal_address');    // → false
```

