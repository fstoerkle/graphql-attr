# graphql-attr

[![Build Status](https://api.travis-ci.org/fstoerkle/graphql-attr.svg?branch=master)](https://travis-ci.org/fstoerkle/graphql-attr) [![renovate-app badge][renovate-badge]][renovate-app]

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

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
