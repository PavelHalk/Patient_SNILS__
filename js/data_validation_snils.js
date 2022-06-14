/*data_validation_snils.js*/

QUnit.test('Snils', function (assert) {
    var data = [].concat(getTests(3), [
        ['', false, 1],
        ['dfdfdsfgvhf', false, 2],
        ['0000000000', false, 3],
        ['0123456789', false, 3],
        ['1234567890', false, 3],
        ['00000000000', true, null],
        ['01234567890', false, 4],
        ['12345678901', false, 4],
        ['000000000000', false, 3],
        ['012345678901', false, 3],
        ['123456789012', false, 3],
// ----
        ['08765430300', true, null],
        ['18765430300', false, 4],
        ['08865430300', false, 4],
        ['08766430300', false, 4],
        ['08765440300', false, 4],
        ['08765430400', false, 4],
        ['08765430301', false, 4]
    ]);

});