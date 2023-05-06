const fs = require('fs');

fs.readdir("./03-files-in-folder/secret-folder", function(err, files) {
    if(err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    });
});

