// 80: Number - isNaN
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isNaN()` determines if a value is `NaN`', function(){
    it('it is a static function on `Number`', function() {
      const whatType = 'function';
      assert.equal(typeof Number.isNaN, whatType);
    });
    describe('returns false', () => {
      describe('for any not-Number type', () => {
        it('like null', () => {
          const justNull = null;
          assert.equal(Number.isNaN(justNull), false);
        });
        it('like a string', () => {
          const aString = "NaN";
          assert.equal(Number.isNaN(aString), false);
        });
        it('like an object', () => {
          const anObject = {};
          assert.equal(Number.isNaN(anObject), false);
        });
        describe('different to the global `isNaN` function (specified way before ES6)', () => {
          it('an object gets converted to a Number before the check, and returns true therefore', () => {
            const fn = isNaN;
            assert.equal(fn({}), true);
          });
          it('a string gets converted to a Number first, and returns true therefore (even though its not `NaN`)', () => {
            const fn = isNaN;
            assert.equal(fn('just a string'), true);
          });
        });
      });
      describe('for Numbers', () => {
        it('like 0', () => {
          const zero = 0;
          assert.equal(Number.isNaN(zero), false);
        });
        it('or Infinity (+∞)', () => {
          const infinity = Number.POSITIVE_INFINITY;
          assert.equal(Number.isNaN(infinity), false);
        });
        it('or the biggest Number (9007199254740991 (2^53−1))', () => {
          const max = Number.MAX_SAFE_INTEGER;
          assert.equal(Number.isNaN(max), false);
        });
        it('or a decimal number', () => {
          const pi = 3.1415926535897932;
          assert.equal(Number.isNaN(pi), false);
        });
      });
    });
    describe('returns true for', () => {
      it('exactly `NaN`', () => {
        const notANumber = NaN;
        assert.equal(Number.isNaN(notANumber), true);
      });
      it('zero divided by zero', () => {
        const zeroDividedByZero = 0 / 0;
        assert.equal(Number.isNaN(zeroDividedByZero), true);
      });
    });
  });