const path = require("path");

const fullnamePath = path.join(__dirname, "names.js");
const fullname = require(fullnamePath);
const hobbiesPath = path.join(__dirname, "hobbies.js");
const hobbies = require(hobbiesPath);

fullname("Federico", "Zorzi");
hobbies("pallavolo", "arrampicata", "videogiochi", "montagna");
