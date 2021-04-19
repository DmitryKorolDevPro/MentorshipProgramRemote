
const fs = require('fs').promises;
class Model {

    async getAll() {
        const fileContentGet = await fs.readFile('./db.json', 'utf8', (err, data) => {
            try {
                fileContentGet = JSON.parse(data).films;
                console.log('Content is: ', fileContentGet.address);
            } catch (err) {
                console.log('Error parsing JSON string: ', err);
            }
        });
        return fileContentGet;
    }

    async addInto(id, title) {
        const filmsList_add = await this.getAll();
        const obj = JSON.parse(filmsList_add);

        obj.films.push({
            id: id,
            title: title
        });
        const jsonStringify = JSON.stringify(obj, null, 2);

        await fs.writeFile('./db.json', jsonStringify, err => {
            if (err) {
                console.log('Error writing file', err);
            } else {
                console.log('Successfully wrote file!');
            }
        });
    }

    async updataItem(id, title) {
        const filmsList_updata = await this.getAll();
        const obj = JSON.parse(filmsList_updata);
        const index = await this.findItemById(id);

        const updata_obj = {
            id: id,
            title: title
        };
        obj.splice(index, 1, updata_obj);
        const jsonStringify = JSON.stringify(obj, null, 2);

        await fs.writeFile('./db.json', jsonStringify, err => {
            if (err) {
                console.log('Error writing file', err);
            } else {
                console.log('Successfully wrote file!');
            }
        });
    }

    async deleteItem(id) {
        const filmsList_delete = await this.getAll();
        const obj = JSON.parse(filmsList_delete);
        const index = await this.findItemById(id);

        obj.splice(index, 1);
        const jsonStringify = JSON.stringify(obj, null, 2);

        await fs.writeFile('./db.json', jsonStringify, err => {
            if (err) {
                console.log('Error writing file', err);
            } else {
                console.log('Successfully wrote file!');
            }
        });
    }

    async findItemById(id) {
        const obj = JSON.parse(filmsList);
        const item = obj.find(item => item.id === id);
        return obj.indexOf(item);
    }
}

const model = new Model();
module.exports = model;