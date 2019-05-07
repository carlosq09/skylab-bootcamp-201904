const fs = require('fs')
const path = require('path');
fs.readdir(process.argv[2], function (err, list) {
    if (err) throw err;
    list.forEach(ext => {
      if(path.extname(ext) === `.${process.argv[3]}`) console.log(ext)
    })
  });