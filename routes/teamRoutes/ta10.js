//TA02 PLACEHOLDER
const routes = require('express').Router();
/* const routes = express.Router(); */
const home = '/teamActivites/10';
console.log(`Accessed ${__filename}`);
const ta10Controller = require("../../controllers/teamAssignments/ta10-controller");


routes
   .get('/getPerson/:id', ta10Controller.getPerson)
   .get('/getPerson', ta10Controller.getPerson)
   .get('/', (req, res, next) => {
      res.render('pages/teamActivites/ta10', {
         title: 'Team Activity 10',
         path: '/ta10', // For EJS 
      });
   })


/* routes.get('/', (req, res, next) => {
   res.render('pages/teamActivites/ta10', {
      title: 'Team Activity 10',
      path: '/ta10', // For EJS 
   });
})
 
routes.get('/', (req, res, next) => {
   res.render('pages/teamActivites/ta10', {
      title: 'Team Activity 10',
      path: '/ta10', // For EJS 
   });
})
 
/* router.get('/', (req, res, next) => {
   res.render('pages/teamActivites/ta02', {
      title: 'Team Activity 02',
      path: '/ta02', // For pug, EJS 
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
   });
}); */

module.exports = routes;