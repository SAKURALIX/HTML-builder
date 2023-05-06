//СОЗДАНИЕ ДОКУМЕНТА
const fs = require('fs');
const path = require('path');

fs.writeFile(
    path.join(__dirname, 'mynotes.txt'),
    'You have entered the text:\n',
    (err) => {
        if (err) throw err;
        console.log('Hello! Enter the text, please:');
    }
);


//ДОБАВЛЕНИЕ ТЕКСТА В ФАЙЛ, ВЫХОД И ПРОЩАЛЬНАЯ ФРАЗА
const { stdin, stdout } = process;
stdin.on('data', data => {
    if (data.toString('utf-8').trim() === 'exit') {
    process.exit();
    } 

    if (data.toString('utf-8').trim() != 'exit') {
      fs.appendFile(
        path.join(__dirname, 'mynotes.txt'),
        data.toString('utf-8').trim() + '\n',
        (err) => {
            if (err) throw err;
        }
      );
    }   
  });
  process.on('exit', () => stdout.write('Good luck!'));

 

//ВЫХОД НА "CTRL + C" ('SIGINT' отслеживает прерывание ввода)
  process.on('SIGINT', function() {
    process.exit();
  });