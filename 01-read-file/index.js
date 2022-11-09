const fs = require('fs');
const path = require('path');
const { stdin, stdout, stderr } = process;

const reading = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

reading.on('data', data => stdout.write(data));
