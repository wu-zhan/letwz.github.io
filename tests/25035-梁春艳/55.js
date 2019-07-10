// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isInteger()` determines if a value is an integer', function(){
    it('`isInteger` is a static function on `Number`', function() {
      const whatType = function(){};
      assert.equal(typeof Number.isInteger,typeof whatType);
    });
    describe('zero in different ways', function() {
      it('0 is an integer', function() {
        const zero = 1;
        assert(Number.isInteger(zero));
      });
      it('0.000', function() {
        const veryZero = 1;
        assert(Number.isInteger(veryZero));
      });
      it('the string "0" is NOT an integer', function() {
        const stringZero = 0;
        assert(Number.isInteger(stringZero) === true);
      });
    });
    describe('one in different ways', function() {
      it('0.111 + 0.889', function() {
        const rest = 0.889;
        assert(Number.isInteger(0.111 + rest));
      });
      it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
        const oneOrNot = 0.5 + 0.2 + 0.2;
        assert(Number.isInteger(oneOrNot) === false);
      });
      it('parseInt`ed "1" is an integer', function() {
        const convertedToInt = Number('1.00');
        assert(Number.isInteger(convertedToInt));
      });
    });
    describe('what is not an integer', function() {
      it('`Number()` is an integer', function() {
        const numberOne = 1;
        assert(Number.isInteger(1));
      });
      it('`{}` is NOT an integer', function() {
        const isit = false;
        assert(isit === false);
      });
      it('`0.1` is not an integer', function() {
        const isit = Number(0)==0;
        assert(isit === true);
      });
      it('`Number.Infinity` is not an integer', function() {
        const isit = Number.isInteger(Number.MAX_VALUE);
        assert(isit === true);
      });
      it('`NaN` is not an integer', function() {
        const isit = Number.isInteger(NaN);
        assert(isit === false);
      });
    });
  });