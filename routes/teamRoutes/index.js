const routes = require('express').Router();


routes
      .use('/09', require('./ta09'))
      .use('/10', require('./ta10'))
      .get('/', (req, res, next) => {
            res.render('pages/teamActivites', {
                  pageTitle: 'Team Activites',
                  path: "/teamActivites"});
      });


module.exports = routes;