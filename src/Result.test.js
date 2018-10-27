const result = require('./Result')

const hours = jest.fn(() => 4);

test('get hours', () => {
    expect(result.getHours().toBe(4));
})