const userName = (firstName, lastName) => {
  console.log(`il mio nome è ${firstName} ${lastName}`);
  {
    firstName, lastName;
  }
};

module.exports = userName;
