const checkAge = (age) => {
    if (age <= 17) {
    return confirm('Do your parents let you?');
    }
     else {
        return true;
    }
};

  const checkAccess = (age) => {
    if (checkAge(age)) {
        return true;

      } else {
        return false;
      }
  };

let age = prompt('How old are you?');

console.log(checkAccess(age));
