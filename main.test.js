const assert = require('assert');
const {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
} = require('./main.js');

describe('ageToAbilities', () => {
    it('returns a proper message for kids', () => {
        assert.strictEqual(ageToAbilities(0), "You can't drive.");
        assert.strictEqual(ageToAbilities(5), "You can't drive.");
        assert.strictEqual(ageToAbilities(15), "You can't drive.");
    });

    it('returns a proper message for young drivers', () => {
        assert.strictEqual(ageToAbilities(16), 'You can drive but not vote.');
        assert.strictEqual(ageToAbilities(17), 'You can drive but not vote.');
    });

    it('returns a proper message for young voters', () => {
        assert.strictEqual(ageToAbilities(18), 'You can vote but not rent a car.');
        assert.strictEqual(ageToAbilities(20), 'You can vote but not rent a car.');
        assert.strictEqual(ageToAbilities(23), 'You can vote but not rent a car.');
        assert.strictEqual(ageToAbilities(24), 'You can vote but not rent a car.');
    });

    it('returns a proper message for 25+ year olds', () => {
        assert.strictEqual(ageToAbilities(25), 'You can do pretty much anything.');
        assert.strictEqual(ageToAbilities(50), 'You can do pretty much anything.');
        assert.strictEqual(ageToAbilities(100), 'You can do pretty much anything.');
    });
});

describe('oddIndices', () => {
    it('returns the values at odd indices for non-empty arrays', () => {
        assert.deepStrictEqual(oddIndices([0, 2, 4, 6, 8, 10]), [2, 6, 10]);
        assert.deepStrictEqual(oddIndices([1, 2, 3, 2, 4, 7]), [2, 2, 7]);
        assert.deepStrictEqual(oddIndices([1, 1, 1, 1, 1, 1]), [1, 1, 1]);
        assert.deepStrictEqual(oddIndices([2, 2, 2, 2, 2, 2]), [2, 2, 2]);
    });

    it('returns the values at odd indices for single value arrays', () => {
        assert.deepStrictEqual(oddIndices([0]), []);
        assert.deepStrictEqual(oddIndices([1]), []);
        assert.deepStrictEqual(oddIndices([2]), []);
    });

    it('returns the values at odd indices for empty arrays', () => {
        assert.deepStrictEqual(oddIndices([]), []);
        assert.deepStrictEqual(oddIndices([]), []);
        assert.deepStrictEqual(oddIndices([]), []);
    });
});

describe('numOddValues', () => {
    it('should count odds when only odds are present', () => {
        assert.strictEqual(numOddValues([1, 3, 5]), 3);
        assert.strictEqual(numOddValues([1]), 1);
        assert.strictEqual(numOddValues([9, 9, 9, 11, 13]), 5);
    });

    it('should count odds when only evens are present', () => {
        assert.strictEqual(numOddValues([2, 4, 6]), 0);
        assert.strictEqual(numOddValues([0]), 0);
        assert.strictEqual(numOddValues([8, 8, 8, 10, 12]), 0);
    });

    it('should count odds when odds and evens are present', () => {
        assert.strictEqual(numOddValues([1, 4, 3]), 2);
        assert.strictEqual(numOddValues([0, 1]), 1);
        assert.strictEqual(numOddValues([9, 8, 7, 5, 12]), 3);
    });

    it('should count odds in an empty array', () => {
        assert.strictEqual(numOddValues([]), 0);
    });
});

describe('averageStringLength', () => {
    it('should get the average string length', () => {
        assert.strictEqual(averageStringLength(['oh', 'hello', 'there']), 4);
        assert.strictEqual(averageStringLength(['oh']), 2);
        assert.strictEqual(averageStringLength(['best', 'test', 'ever!!!']), 5);
    });

    it('should get the average string length when the average is a decimal', () => {
        assert.strictEqual(averageStringLength(['oh', 'hello']), 3.5);
        assert.strictEqual(averageStringLength(['i', 'am']), 1.5);
    });

    it('should return 0 if the array is empty', () => {
        assert.strictEqual(averageStringLength([]), 0);
    });
});

describe('firstPunctuationIndex', () => {
    it('should return the index of the first punctuation', () => {
        assert.strictEqual(firstPunctuationIndex('!'), 0);
        assert.strictEqual(firstPunctuationIndex('wow!'), 3);
        assert.strictEqual(firstPunctuationIndex('wow! that is so crazy'), 3);
        assert.strictEqual(firstPunctuationIndex('wow? that is so crazy'), 3);
        assert.strictEqual(firstPunctuationIndex('wow that is so crazy.'), 20);
    });

    it('should return the index of the first punctuation (when multiple are present)', () => {
        assert.strictEqual(firstPunctuationIndex('wow? that is so crazy!!!!'), 3);
        assert.strictEqual(firstPunctuationIndex('wow that is so crazy....'), 20);
        assert.strictEqual(firstPunctuationIndex('wow. that? is! so. crazy?!??!...'), 3);
    });

    it('should return -1 if no punctuation was found', () => {
        assert.strictEqual(firstPunctuationIndex('wow that is so crazy'), -1);
        assert.strictEqual(firstPunctuationIndex(''), -1);
    });
});

describe('getPlace', () => {
    it('should work for 1st place', () => {
        assert.strictEqual(getPlace([0], 1), '1st place');
        assert.strictEqual(getPlace([90, 50, 30], 100), '1st place');
        assert.strictEqual(getPlace([10, 4, 3, 2, 1, 0], 23), '1st place');
    });

    it('should work for 2nd place', () => {
        assert.strictEqual(getPlace([3, 0], 1), '2nd place');
        assert.strictEqual(getPlace([230, 90, 50, 30], 100), '2nd place');
        assert.strictEqual(getPlace([24, 10, 4, 3, 2, 1, 0], 23), '2nd place');
    });

    it('should work for 3rd place', () => {
        assert.strictEqual(getPlace([4, 3, 0], 1), '3rd place');
        assert.strictEqual(getPlace([400, 230, 90, 50, 30], 100), '3rd place');
        assert.strictEqual(getPlace([40, 24, 10, 4, 3, 2, 1, 0], 23), '3rd place');
    });

    it('should work for 4th - 6th places', () => {
        assert.strictEqual(getPlace([10, 4, 3, 0], 1), '4th place');
        assert.strictEqual(getPlace([600, 500, 400, 230, 90, 50, 30], 100), '5th place');
        assert.strictEqual(getPlace([100, 99, 98, 40, 24, 10, 4, 3, 2, 1, 0], 23), '6th place');
    });

    it('should work for 99th place', () => {
        let highScores = [];
        for (let i = 0; i < 98; i++) {
            highScores.push(10);
        }
        assert.strictEqual(getPlace(highScores, 1), '99th place');
    });

    it('should work for 101st place', () => {
        let highScores = [];
        for (let i = 0; i < 100; i++) {
            highScores.push(10);
        }
        assert.strictEqual(getPlace(highScores, 1), '101st place');
    });

    it('should work for 102nd place', () => {
        let highScores = [];
        for (let i = 0; i < 101; i++) {
            highScores.push(10);
        }
        assert.strictEqual(getPlace(highScores, 1), '102nd place');
    });

    it('should work for 103rd place', () => {
        let highScores = [];
        for (let i = 0; i < 102; i++) {
            highScores.push(10);
        }
        assert.strictEqual(getPlace(highScores, 1), '103rd place');
    });
});

describe('addToObj', () => {
    let obj;

    beforeEach(() => {
        // Reset the object before each test
        obj = {
            user: 'teacher',
            birthday: 'January 1st',
            favoriteColor: 'yellow',
        };
    });

    it('should add a new key-value pair to the object', () => {
        addToObj(obj, 'homeState', 'tennessee');
        assert.deepStrictEqual(obj, {
            user: 'teacher',
            birthday: 'January 1st',
            favoriteColor: 'yellow',
            homeState: 'tennessee',
        });
    });

    it('should modify an existing key in the object', () => {
        addToObj(obj, 'user', 'student');
        assert.deepStrictEqual(obj, {
            user: 'student', // Value should be updated
            birthday: 'January 1st',
            favoriteColor: 'yellow',
        });
    });

    it('should not modify other keys in the object', () => {
        addToObj(obj, 'homeState', 'tennessee');
        assert.strictEqual(obj.favoriteColor, 'yellow'); // favoriteColor should remain unchanged
    });

    it('should add a key with an empty string as a value', () => {
        addToObj(obj, 'newKey', '');
        assert.strictEqual(obj.newKey, ''); // Value should be an empty string
    });

    it('should add a new key with an object as its value', () => {
        const newObjValue = {
            city: 'Nashville',
            state: 'Tennessee',
        };

        addToObj(obj, 'address', newObjValue);

        assert.deepStrictEqual(obj, {
            user: 'teacher',
            birthday: 'January 1st',
            favoriteColor: 'yellow',
            address: {
                city: 'Nashville',
                state: 'Tennessee',
            },
        });
    });

    it('should return error message if no key is given', () => {
        assert.strictEqual(addToObj(obj), 'Function must be called with a valid key.'); // favoriteColor should remain unchanged
    });

    it('should return error message if no valid key is given', () => {
        assert.strictEqual(addToObj(obj, [1, 2, 3]), 'Function must be called with a valid key.'); // favoriteColor should remain unchanged
    });
});

describe('duplicateElements', () => {
    it('should return an empty array when given an empty array', () => {
        const inputArray = [];
        const result = duplicateElements(inputArray);
        assert.deepStrictEqual(result, []);
    });

    it('should return an empty array when there are no repeating elements', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const result = duplicateElements(inputArray);
        assert.deepStrictEqual(result, []);
    });

    it('should return an array of repeating elements', () => {
        const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
        const result = duplicateElements(inputArray);
        assert.deepStrictEqual(result, [2, 4, 6]);
    });

    it('should handle negative numbers and zero', () => {
        const inputArray = [-1, 0, 1, -1, 2, 0, 2];
        const result = duplicateElements(inputArray);
        assert.deepStrictEqual(result, [-1, 0, 2]);
    });
});
