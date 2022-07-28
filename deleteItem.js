let user = {
  manager : 'Pavel',
  boss : 'liza',
  director : 'masik',
  doctor : 'alex',
  bg : 'Masha',
};
const objectWithoutKey = (user, withoutKey) => {
  for (key in user) {
    delete user[withoutKey];
  }
    return user;
};

 console.log(objectWithoutKey(user, 'manager'));
