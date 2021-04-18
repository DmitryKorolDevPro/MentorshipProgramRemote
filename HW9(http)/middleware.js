const MiddlewareCreator = (controllerMethod) => {
  return async(req, res, next)  => {
      try {
        await controllerMethod(req, res);
        next();
      } catch (e) {
        // here we can handle errors
        res.status(e.code || 500).send({ error: e.message || 'Something went wrong' });
      }
  };
};

module.exports = MiddlewareCreator;
