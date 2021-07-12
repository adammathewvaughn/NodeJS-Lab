const path = require("path");
const fs = require("fs");
// const request = require("request");
let chirps = [
    {chirpone:"firstone"},
    {chirptwo:"secondone"},
    {chirpthree:"thirdone"}
];
let dataPath = path.join(__dirname, "../chirps.json")

// request("/", (err, res, body) => {
//     if (err) console.log(err);
    JSON.parse(body).chirps.forEach(chirp => {
       fs.appendFileSync(dataPath, chirp + "\n");
    });
// });