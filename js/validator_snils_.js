/*validator_snils_.js*/
function validateSnils(snils, error) {//валидатор снилса
    var result = false;
    var message = error;
    if (typeof snils === 'number') {
        snils = snils.toString();
    } else if (typeof snils !== 'string') {
        snils = '';
    }
    if (!snils.length) {

    } else if (/[^0-9]/.test(snils)) {

    } else if (snils.length !== 11) {

    } else {
        var sum = 0;
        for (var i = 0; i < 9; i++) {
            sum += parseInt(snils[i]) * (9 - i);
        }
        var checkDigit = 0;
        if (sum < 100) {
            checkDigit = sum;
        } else if (sum > 101) {
            checkDigit = parseInt(sum % 101);
            if (checkDigit === 100) {
                checkDigit = 0;
            }
        }
        if (checkDigit === parseInt(snils.slice(-2))) {
            result = true;

        } else {

        }
    }

    return result;
}



