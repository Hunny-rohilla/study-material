// Node js coevolution Link:
// https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY

// node command to run js file in node enviorment on file save
// **node --watch file_name**


// path module
const path = require('path');
path.basename(__dirname);
path.extname(__filename);
path.parse(__filename);
path.format(path.parse(__filename));
path.isAbsolute(__filename);
path.join('folder1','folder2','app.js'); //output = folder1/folder2/app.js
path.resolve('folder1','folder2','app.js'); //output = ../../../folder1/folder2/app.js

