const fs = require('fs');

fs.readFile('./welcome.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error message: ${error.message}`);
    } else {
        console.log(data);
    }
});