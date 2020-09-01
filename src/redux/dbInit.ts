export default () => ({
  // id,
  name: 'Hans',
  age: Math.round(Math.random() * 50),
  books: [{
    id: 1,
    name: 'React',
    isbn: '543-233-33',
  }, {
    id: 2,
    name: 'Redux',
    isbn: '543-233-43',
  }],
  lazyValue: 123,
});
