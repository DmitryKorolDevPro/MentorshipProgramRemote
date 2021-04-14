import { controller } from require('./controller.js');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    controller.filmRoutes(app, fs);

};

module.exports = appRouter;