const routes = require('express').Router();


routes
      .use('/01', require('./ta01'))
      .use('/02', require('./ta02'))
      .use('/03', require('./ta03'))
      .use('/04', require('./ta04'))
      .get('/', (req, res, next) => {
            res.render('pages/teamActivites', {
                  pageTitle: 'Team Activites',
                  path: "/teamActivites"});
      });


module.exports = routes;