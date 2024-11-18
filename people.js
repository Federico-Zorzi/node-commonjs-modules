const path = require("path");

const fullnamePath = path.join(__dirname, "names.js");
const fullname = require(fullnamePath);
const hobbiesPath = path.join(__dirname, "hobbies.js");
const hobbiesList = require(hobbiesPath);

const newUser = () => {
  const { firstName, lastName } = fullname("Federico", "Zorzi");
  const { hobbies } = hobbiesList("pallavolo", "arrampicata", "videogiochi");
  return {
    firstName,
    lastName,
    hobbies,
  };
};

console.log(newUser());
