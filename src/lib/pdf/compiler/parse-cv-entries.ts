// print filenames in .data directory
const fs = require('fs');
const path = require('path');
const dir = './.data';
fs.readdir(dir, (err : any, files : any) => {
  files.forEach((file: any)=> {
    console.log(file);
  });
});