const routes = require('express').Router();


routes
      .use('/09', require('./ta09'))
      .get('/', (req, res, next) => {
            res.render('pages/teamActivites', {
                  pageTitle: 'Team Activites',
                  path: "/teamActivites"});
      });


module.exports = routes;