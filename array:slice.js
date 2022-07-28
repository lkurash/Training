const arrayWithName = (array, name) => {
  const newArray = array.slice();
  const index = array.indexOf(null);

  if (index !== -1) {
      newArray.splice(index, 1, name);

      return newArray.join(' ');
    } else {
      return 'error';
    }
};

const array = ['Hello', 'I', 'am', null];
console.log(arrayWithName(array, "Liza"));
