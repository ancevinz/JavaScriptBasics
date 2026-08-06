//const fs = require('fs');
import fs from "fs"

fs.writeFile('output.txt', 'Playwright Test Passed', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File written successfully");
});

fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return; // Stops the execution if there's an error
    }

    console.log(data);
});

