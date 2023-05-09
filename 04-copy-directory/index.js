const fs = require('fs');

fs.readdir('./04-copy-directory/files-copy', function copyFiles(err, copiedFiles) {
  if(err) {
    fs.mkdir('./04-copy-directory/files-copy', err => {
      if(err) throw err;
    });

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

        //по новой копирование:
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