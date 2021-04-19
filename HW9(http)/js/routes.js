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
    app.get('/films', async (req, res) => {

        const result = await controller.getAllInFile();
        if (result === 0) {
            res.status(204).json({ message: `Error 204. No Content` });
        }
        else {
            res.status(200).send(result);
        }
    });

    // CREATE
    app.post('/films', async (req, res) => {
        const result = await controller.addInFile(req.query);
        if (result === 0) {
            res.status(204).json({ message: `Error 204. No Content` });
        }
        else {
            res.status(200).send(result);
        }
    });

    // UPDATE
    app.put('/films', async (req, res) => {
        const result = await controller.addInFile(req.query);
        if (result === 0) {
            res.status(204).json({ message: `Error 204. No Content` });
        }
        else {
            res.status(200).send(result);
        }
    });

    // DELETE
    app.delete('/films', async (req, res) => {
        const result = await controller.deleteItemInFile(req.query);
        if (result === 0) {
            res.status(204).json({ message: `Error 204. No Content` });
        }
        else {
            res.status(200).send(result);
        }
    });
}
module.exports = appRouter;