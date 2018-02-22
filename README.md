# graphql-attr

[![Build Status](https://api.travis-ci.org/fstoerkle/graphql-attr.svg?branch=master)](https://travis-ci.org/fstoerkle/graphql-attr) [![Greenkeeper badge](https://badges.greenkeeper.io/fstoerkle/graphql-attr.svg)](https://greenkeeper.io/)

Get attributes of GraphQL queries


## API

### Check for kind of operation

```javascript
const { parse } = require('graphql-attr');

parse('query { email }').isMutation() // → false
parse('query { email }').isQuery() // → true
```
### Check for selected fields

```javascript
const { parse } = require('graphql-attr');

parse('query { email }').containsField('email') // → true
```

### Check for passed arguments

```javascript
const { parse } = require('graphql-attr');
const query = 'query { robot(name: "wall-e") { name } }'

parse(query).containsArg('name') // → true
parse(query).containsArg('name', 'wall-e') // → true
parse(query).containsArg('name', 'banana') // → false
parse(query).containsArg('material') // → false

```

## License

MIT
