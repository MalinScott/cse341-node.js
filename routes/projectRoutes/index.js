const routes = require('express').Router();
const projectController = require('../../controllers/project/axios');

routes
      .use('/getUser', projectController.getData)
      .get('/', (req, res, next) => {
         res.render('pages/project/', {
            pageTitle: 'Stocks',
            path: "/project02"});
      });

      module.exports = routes;