
const fs = require('fs').promises;
class Model {
    async getAll() {
        const fileContentGet = await fs.readFile('./db.json', 'utf8', (err, data) => {
            try {
                fileContentGet = JSON.parse(data).films;
                return ('Content is: ', fileContentGet.address);
            } catch (err) {
                return ('Error parsing JSON string: ', err);
            }
        });
        return fileContentGet;
    }
    async addInto(id, title) {
        const filmsList_add = await this.getAll();
        const obj = JSON.parse(filmsList_add);

        obj.push({
            id: id,
            title: title
        });

        const jsonStringify = JSON.stringify(obj, null, 2);

        await fs.writeFile('./db.json', jsonStringify, err => {
            if (err) {
                return ('Error writing file', err);
            } else {
                return ('Successfully wrote file!');
            }
        });
    }

    async updateItem(id, title) {
        const filmsList_updata = await this.getAll();
        const obj = JSON.parse(filmsList_updata);

        const itemToUpdateIndex = await this.findIndexItemById(id);

        const itemToUpdate = obj[itemToUpdateIndex];
        itemToUpdate.title = title;
        obj[itemToUpdateIndex] = itemToUpdate;
        console.log('updata: ' + obj);
        const jsonStringify = JSON.stringify(obj, null, 2);
        await fs.writeFile('./db.json', jsonStringify, err => {
            if (err) {
                console.log('Error writing file', err);
            } else {
                console.log('Successfully wrote file!');
            }
        });
        return obj;
    }

    async deleteItem(id) {
        const filmsList_delete = await this.getAll();
        const obj = JSON.parse(filmsList_delete);//.films
        const index = await this.findIndexItemById(id);

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
    async findIndexItemById(id) {
        const filmsList = await this.getAll();
        const obj = JSON.parse(filmsList);//.films.
        console.log('find obj ' + obj);
        const item = obj.find(item => item.id === id);
        console.log('find item index ' + obj.indexOf(item));
        return obj.indexOf(item);
    }
}

const model = new Model();
module.exports = model;