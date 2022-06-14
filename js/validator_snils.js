/*validator_snils.js for tests*/
function validateSnils(snils, error) {
    var result = false;
    if (typeof snils === 'number') {
        snils = snils.toString();
    } else if (typeof snils !== 'string') {
        snils = '';
    }
}