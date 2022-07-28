const sortArray = (a, b) => {

  if (b > a){
     return 1;
  }
  if (b == a) {
    return 0;
  }
  if (b < a) {
    return -1;
}
};
const array = [5, 2, 1, 8, -10];
array.sort(sortArray);
console.log(array);

