const { rejects } = require('assert');
const fs = require('fs');
const path = require('node:path');
const { resolve } = require('path');
const { stat } = require('fs');

fs.readdir("./03-files-in-folder/secret-folder", {withFileTypes: true}, function(err, files) {
    if(err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        if(file.isDirectory() === false) {
            // function getFileSize(name) {
            //     return new Promise((resolve, reject) => stat(name, (err, { size }) => {
            //         if(err) return reject(err);
            //         resolve(size);
            //     }));
            // }
            let fileName = file.name;

            // fs.stat('./03-files-in-folder/secret-folder/data.csv', (err, stats) => {
            //     if(err) {
            //         console.log(`File doesn't exist.`)
            //     } else {
            //         const size = stats.size;
            //         console.log(stats)
            //         console.log(size)
            //     }
            // })

            let dotIndex = fileName.indexOf('.');
            let extention = path.extname(file.name);
            // let fileSize = getFileSize(file);
            let fileSize = '';
            // console.log(file.path)
            console.log(fileName.slice(0, dotIndex) + ' - ' + extention.slice(1) + fileSize);
            // console.log(path.extname(file.name));
        }
    });
});

