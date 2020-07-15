/**** tape-style ****/
var test = require('tape');

test('it should have a working test environment', function(t) {
    t.equal(true, true);
    t.end();
});

/**** karma-style ****/
// it('should have a working test environment', function() {
//     expect(true).toEqual(true);
// });
