function soma(a, b) {
  return a + b;
}

test('if soma function is called with 4 and 5 it should return 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
