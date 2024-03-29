const AdventDay2 = (function() {
    const findDesiredOutput = (input, desiredResult) => {
        let foundDesiredResult = false;
        let candidate;
        let result = false;

        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                candidate = [...input];
                candidate[1] = i;
                candidate[2] = j;

                if (testInput(candidate)[0] === desiredResult) {
                    result = [...candidate];
                }
            }
        }

        return result;
    }

    const testInput = (input) => {
        let operationIndex = 0;
        let result = [...input];

        while (result[operationIndex] !== 99) {
            result = calculate(result, operationIndex);
            operationIndex += 4;
        }

        return result;
    }

    const calculate = (input, position) => {
        const num1 = input[input[position + 1]];
        const num2 = input[input[position + 2]];
        const outputPosition = input[position + 3];
        const calculationResult = input[position] === 1 ? num1 + num2 : num1 * num2;

        input[outputPosition] = calculationResult;

        return input;
    }

    return { findDesiredOutput };
})();

const input = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 1, 19, 5, 23, 2, 10, 23, 27, 2, 27, 13, 31, 1, 10, 31, 35, 1, 35, 9, 39, 2, 39, 13, 43, 1, 43, 5, 47, 1, 47, 6, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 9, 59, 63, 2, 6, 63, 67, 1, 13, 67, 71, 1, 9, 71, 75, 2, 13, 75, 79, 1, 79, 10, 83, 2, 83, 9, 87, 1, 5, 87, 91, 2, 91, 6, 95, 2, 13, 95, 99, 1, 99, 5, 103, 1, 103, 2, 107, 1, 107, 10, 0, 99, 2, 0, 14, 0];
const desiredResult = 19690720;

console.log(AdventDay2.findDesiredOutput([...input], desiredResult));
