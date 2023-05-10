const fs = require('fs');

// readdir пытается прочитать содержимое папки files-copy
fs.readdir('./04-copy-directory/files-copy', function copyFiles(err, copiedFiles) {
  // если папка отсутствует и он по идее должен выкинуть ошибку, то mkdir создаёт эту папку
  if(err) {
    fs.mkdir('./04-copy-directory/files-copy', err => {
      if(err) throw err;
    });

    // читает содержимое папки files и копирует каждый файл в созданную папку files-copy
    fs.readdir('./04-copy-directory/files', {withFileTypes: true}, (err, files) => {
      if(err) {
        throw err
      } else {
        files.forEach(function(file) {
          let fileName = file.name;
          fs.copyFile(`./04-copy-directory/files/${fileName}`, `./04-copy-directory/files-copy/${fileName}`, err => {
            if(err) throw err;
          })
        });
      }
    });
  } else if(copiedFiles.length > 0) {
    // если "copiedFiles.length > 0", значит папка files-copy уже существует и содержит файлы
    // тогда с помощью readdir читает содержимое папки, {withFileTypes: true} определяет, что это файл, а не папка
    // и удаляет каждый из файлов
    fs.readdir('./04-copy-directory/files-copy', {withFileTypes: true}, (err, filesToDelete) => {
      if(err) {
        throw err
      } else {
        filesToDelete.forEach(function(fileToDelete) {
          let fileName = fileToDelete.name;
          fs.unlink(`./04-copy-directory/files-copy/${fileName}`, err => {
            if(err) throw err;
          })
        });

        //по новой копирует чтобы учитывались все изменения:
        fs.readdir('./04-copy-directory/files', {withFileTypes: true}, (err, files) => {
          if(err) {
            throw err
          } else {
            files.forEach(function(file) {
              let fileName = file.name;
              fs.copyFile(`./04-copy-directory/files/${fileName}`, `./04-copy-directory/files-copy/${fileName}`, err => {
                if(err) throw err;
              })
            });
          }
        });
    
      }
    });

  } else {
        fs.rmdir('./04-copy-directory/files-copy', err => {
          if(err) throw err;
          console.log('Папка успешно удалена');
        });
  }
});