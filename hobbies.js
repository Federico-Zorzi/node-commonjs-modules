const hobbiesList = (...hobbies) => {
  console.log(`i miei hobbies sono: ${hobbies}`);
  return { hobbies };
};

module.exports = hobbiesList;
