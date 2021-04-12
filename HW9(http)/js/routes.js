const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // run our user route module here to complete the wire up
    userRoutes(app, fs);

};

const userRoutes = (app, fs) => {
    const dataPath = './db.json'; // variables

    // refactored helper methods
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.writeFile(filePath, fileData, encoding, err => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/films', (req, res) => {
        readFile(data => {
            res.send(data);
        }, true);
    });

    // CREATE
    app.post('/films/:id', (req, res) => {
        readFile(data => {

            const newFilmId = req.params['id'];

            // add the new user
            data[newFilmId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new film added!');
            });
        }, true);
    });

    // UPDATE
    app.put('/films/:id', (req, res) => {
        readFile(data => {

            const filmId = req.params['id'];
            data[filmId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`film id: ${filmId} updated`);
            });
        }, true);
    });

    // DELETE
    app.delete('/films/:id', (req, res) => {
        readFile(data => {
            // add the new user
            const filmId = req.params['id'];
            delete data[filmId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`films id:${filmId} removed`);
            });
        }, true);
    });
};


module.exports = appRouter;