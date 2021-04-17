class Middleware {
  handleRequest(req, _, next) {
    Middleware.validateQueryParams(req.query);
    next();
  }

  static validateQueryParams(query) {
    let { id, name, url } = query;

    id = parseInt(id);

    if (isNaN(id)) {
      query.id = undefined;
    } else {
      query.id = id;
    }

    if (name !== undefined && url !== undefined) {
      name = name.trim();
      url = url.trim();

      if (name === '') {
        query.name = undefined;
      } else {
        query.name = name;
      }

      if (url === '') {
        query.url = undefined;
      } else {
        query.url = url;
      }
    }
  }
}

module.exports = new Middleware();