const test = require('ava');

const x = require('../index');

const query = `
  query {
    aField 
  }
`;

test('query(..).contains() returns true if the query contains the field', (t) => {
  t.true(x.query(query).contains('aField'));
});

test('query(..).contains() returns false if the query does not contain the field', (t) => {
  t.false(x.query(query).contains('does not exist'));
});
