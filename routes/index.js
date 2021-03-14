const routes = require('express').Router();
const teamActivites = require('./teamRoutes');
const proveActivites = require('./proveRoutes');
const projects = require('./projectRoutes');

// route to different files
routes
   .use('/teamActivites', teamActivites)
   .use('/proveAssignments', proveActivites)
   .use('/project02', projects)
   
   .get('/', (req, res, next) => {
      res.render('pages/index', { title: 'Scott Malin\'s CSE341 Repository ', path: '/', pageTitle: 'Scott\'s CSE341' });
   })
   .use((req, res, next) => {
      // 404 page
      res.render('pages/404', { title: '404 - Page Not Found', path: req.url, pageTitle: 'Scott\'s CSE341' })
   })

module.exports = routes;