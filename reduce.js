
let arr = [[1, [2] ], 4, [5]];
    arr = arr.flat(Infinity);
let sum = arr.reduce((a, b) => {
    return a + b;
 });
 
 console.log(sum);
