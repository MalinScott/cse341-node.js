const routes = require('express').Router();


routes
      .use('/09', require('./prove09'))
      .use('/10', require('./prove10'))
      .get('/', (req, res, next) => {
         res.render('pages/proveAssignments/', {
            pageTitle: 'Prove Assignments',
            path: "/proveAssignments"});
      });

      module.exports = routes;