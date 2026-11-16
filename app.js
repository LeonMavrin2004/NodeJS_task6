// מגישים:
// ליאון מברין
// דניאל ברששת

const fs = require('fs');

// Define the names of the input files
const names = ["input1.txt", "input2.txt", "input3.txt"];

// Read each file and split its text into lines
const files = names.map(name => {
    const text = fs.readFileSync(`inputs/${name}`, 'utf-8');
    return text === '' ? [] : text.split(/\r?\n/);
});

const result = []; // Store all copied lines

let i = 1;      // Number of lines to copy in each round
let index = 0;  // Starting position in each file

// Continue while at least one file has more lines
while (files.some(file => index < file.length)) {

    for (const file of files) {
        // Copy up to i lines into the result array       
        result.push(...file.slice(index, index + i));
    }

    index += i;
    i++;
}
// Write all copied lines to a new file
fs.writeFileSync('output.txt', result.join('\n'));