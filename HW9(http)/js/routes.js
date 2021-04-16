const model = require('./model.js');
const controller = require('./controller.js');

const appRouter = (app, fs) => {
    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });
    // // other routes
    filmRoutes(app, fs);
};

const filmRoutes = (app, fs) => {

    // READ
    app.get('/films', (req, res) => {

        res.send(controller.getAllItems());
    });

    // CREATE
    app.post('/films/:id', (req, res) => {
        model.readFile(data => {
            const newFilmId = req.params['id'];

            // add the new user
            data[newFilmId] = req.body;

            if (newFilmId === undefined) {
                res.status(404).json({ message: `Error 404. Film not found` });
            }
            else {
                model.writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send('new film added!');
                });
            }
        }, true);


    });

    // UPDATE
    app.put('/films/:id', (req, res) => {
        model.readFile(data => {

            const filmId = req.params['id'];
            data[filmId] = req.body;

            if (newFilmId === undefined) {
                res.status(404).json({ message: `Error 404. Film not found` });
            }
            else {
                model.writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`film id: ${filmId} updated`);
                });
            }
        }, true);
    });

    // DELETE
    app.delete('/films/:id', (req, res) => {
        model.readFile(data => {
            // add the new user
            const filmId = req.params['id'];
            delete data[filmId];

            if (newFilmId === undefined) {
                res.status(404).json({ message: `Error 404. Film not found` });
            }
            else {
                model.writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`films id:${filmId} removed`);
                });
            }
        }, true);
    });
};


module.exports = appRouter;