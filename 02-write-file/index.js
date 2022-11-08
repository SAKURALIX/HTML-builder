// const { stdin, stdout } = process;
// stdin.on('data', data => stdout.write(data));

// process.on('exit', () => stdout.write('Goog luck!'));


// const { stdout, stderr } = process;

// process.on('exit', code => {
//     if (code === 0) {
//         stdout.write('Okay');
//     } else {
//         stderr.write(`Что-то пошло не так. Программа завершилась с кодом ${code}`);
//     }
// });


// stdout.write('Как тебя зовут?\n');
// stdin.on('data', data => {
//   stdout.write('Привет, ');
//   stdout.write(data);
//   process.exit();
// });
// process.on('exit', () => stdout.write('Удачи!'));


const fs = require('fs');
const path = require('path');

fs.writeFile(
    path.join(__dirname, 'mynotes.txt'),
    'Text:',
    (err) => {
        if (err) throw err;
        console.log('The file was created');
    }
);


// const fs = require('fs');

// const input = fs.createReadStream('source.txt', 'utf-8');
const output = fs.createWriteStream(__dirname, 'mynotes.txt');

// input.on('data', chunk => output.write(chunk));
//  