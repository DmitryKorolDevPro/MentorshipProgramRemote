class Model {

    // refactored helper methods
    readFile(callback, returnJson = false, filePath = dataPath, encoding = 'utf8') {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    writeFile(fileData, callback, filePath = dataPath, encoding = 'utf8') {
        fs.writeFile(filePath, fileData, encoding, err => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

}

const model = new Model();
module.exports = { model };