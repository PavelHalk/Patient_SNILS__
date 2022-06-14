/*validator_snils.js for tests*/
function validateSnils(snils, error) {
    var result = false;
    if (typeof snils === 'number') {
        snils = snils.toString();
    } else if (typeof snils !== 'string') {
        snils = '';
    }
    if (!snils.length) {
        error.code = 1;
        error.message = 'СНИЛС пуст';
    } else if (/[^0-9]/.test(snils)) {
        error.code = 2;
        error.message = 'СНИЛС может состоять только из цифр';
    } else if (snils.length !== 11) {
        error.code = 3;
        error.message = 'СНИЛС может состоять только из 11 цифр';
    }
}