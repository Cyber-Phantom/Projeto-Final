module.exports = (app) => {
  app.route("/users")
    .post(app.api.user.save)  
    .get(app.api.user.get);

  app.route("/users/:id")
    .put(app.api.user.save)
    .get(app.api.user.getById);

  app.route("/categories")
    .get(app.api.category.get)
    .post(app.api.category.save)

  // Cuidado com a ordem! Tem de vir antes de '/categories/:id'
  app.route("/categories/tree")
    .get(app.api.category.getTree)

  app.route("/categories/:id")
    .get(app.api.category.getById)
    .put(app.api.category.save)
    .delete(app.api.category.remove)
};
