const routes = require('express').Router();
const teamActivites = require('./teamRoutes');
const proveActivites = require('./proveRoutes');

// route to different files
routes
   .use('/teamActivites', teamActivites)
   .use('/proveAssignments', proveActivites)
   
   .get('/', (req, res, next) => {
      res.render('pages/index', { title: 'Scott Malin\'s CSE341 Node.js applications ', path: '/' });
   })
   .use((req, res, next) => {
      // 404 page
      res.render('pages/404', { title: '404 - Page Not Found', path: req.url })
   })

module.exports = routes;