const fs = require('fs');
const path = require('node:path');

fs.readdir("./03-files-in-folder/secret-folder", {withFileTypes: true}, function(err, files) {
    if(err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        if(file.isDirectory() === false) {
            let fileName = file.name;
            let dotIndex = fileName.indexOf('.');
            let extention = path.extname(file.name);

            fs.stat(`./03-files-in-folder/secret-folder/${fileName}`, (err, stats) => {
                if(err) {
                    console.log(`File doesn't exist.`)
                } else {
                    let fileSize = (stats.size*0.001).toFixed(3);
                    return console.log(fileName.slice(0, dotIndex) + ' - ' + extention.slice(1) + ' - ' + fileSize + 'kb');
                }
            })
        }
    });
});

