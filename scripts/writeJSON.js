const fs = require('fs');

const writeJSON = (filename, rawJsonData) => {
    const jsonData = JSON.stringify(rawJsonData, null, 2); // null and 2 are for formatting (2 spaces indentation)
    fs.writeFileSync(filename, jsonData, 'utf8');
}

module.exports = { writeJSON };