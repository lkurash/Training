array = [0, 1, 2, 3, 4, null, undefined, false, '', NaN, 20];

const arrayWithPositiveElements = (array) => {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
};

console.log(arrayWithPositiveElements(array));
