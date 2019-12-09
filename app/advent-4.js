const AdventDay4 = (function() {
    const getValidPasswords = range => {
        const result = [];

        for (let i = range.min;  i < range.max; i++) {
            if (neverDecreases(i) && hasAdjacentDuplicateDigit(i)) {
                result.push(i);
            }
        }

        return result;
    }

    const neverDecreases = number => {
        const splitNumber = number.toString().split('');

        return splitNumber[0] <= splitNumber[1] &&
            splitNumber[1] <= splitNumber[2] &&
            splitNumber[2] <= splitNumber[3] &&
            splitNumber[3] <= splitNumber[4] &&
            splitNumber[4] <= splitNumber[5];
    }

    const hasAdjacentDuplicateDigit = number => {
        const splitNumber = number.toString().split('');

        const count = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
        }

        splitNumber.forEach(digit => {
            count[digit]++;
        });

        return !!Object.values(count).find(numberOfDigits => numberOfDigits === 2);
    }

    return { getValidPasswords };
})();

const range = { min: 382345, max: 843167};
console.log(AdventDay4.getValidPasswords(range).length);
