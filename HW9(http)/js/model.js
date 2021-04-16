
const fs = require('fs');

class Model {
    // constructor() {
    //     this.dataPath = './db.json'; // variables
    // }

    // refactored helper methods
    getAllinFiles() {
        let fileContent = fs.readFileSync('./db.json', "utf8");
        console.log('...Readfile is worked');
        return JSON.parse(fileContent);
    }


    // writeFile(fileData, callback, filePath = dataPath, encoding = 'utf8') {
    //     fs.writeFile(filePath, fileData, encoding, err => {
    //         if (err) {
    //             throw err;
    //         }

    //         callback();
    //     });
    // };

}

const model = new Model();
module.exports = model;