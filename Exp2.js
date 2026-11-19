const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello World');

console.log(fs.readFileSync('demo.txt', 'utf8'));

fs.appendFileSync('demo.txt', '\nWelcome to FSD');

console.log(fs.readFileSync('demo.txt', 'utf8'));

fs.unlinkSync('demo.txt');

console.log("File deleted successfully");