const fs = require('fs');

// fs.mkdir('./04-copy-directory/files-copy', err => {
//   if(err) throw err;
// })

fs.readdir('./04-copy-directory/files-copy', (err, files) => {
  if(err) {
    fs.mkdir('./04-copy-directory/files-copy', err => {
      if(err) throw err;
    });
  } else if(files.length > 0) {
  //   fs.rmdir('./04-copy-directory/files-copy', err => {
  //     if(err) throw err;
  //     console.log('Папка успешно удалена');
  //  });
   console.log('Папка не пуста');
  } else {
        fs.rmdir('./04-copy-directory/files-copy', err => {
          if(err) throw err;
          console.log('Папка успешно удалена');
        });
  }
});





// fs.readdir('./04-copy-directory/files-copy', (err, files) => {
//   if(err) throw err;
//   console.log(files.length);
// });




// fs.copyFile("./04-copy-directory/files/test-css.css", "./04-copy-directory/test-css.css", (err) => {
//     if (err) {
//       console.log("Error Found:", err);
//     }
//     else {
//         return
//     }
//   });
