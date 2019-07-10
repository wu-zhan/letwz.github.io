// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
    //解构每个字符，和数组一样
    it('destructure every character, just as if the string was an array', () => {
      let [a, b, c] = 'abc';
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    it('missing characters are undefined', () => {
      const [a,, c] = 'ab';
      assert.equal(c, void 0);
    });
    //Unicode字符也起作用
    it('unicode character work too', () => {
      const [,space, coffee] = 'a ☕';
      assert.equal(coffee, '\u{2615}');
    });
  });
  