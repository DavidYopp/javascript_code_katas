const {reverse} = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses another string', ()=> {
  expect(reverse('hello')).toEqual('olleh');
});

test('Reverse is defined', () => {
  expect(reverse).toBeDefined();
})
