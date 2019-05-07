const fs = require('fs')
const path = require('path');
module.exports = function (filepath, exten, callback) {
    fs.readdir(filepath, function (err, list) {
        if (err) return callback(err);
        return callback(null,list.filter(ext => {
          if(path.extname(ext) === `.${exten}`) return ext
        }))
      });
}