//TA02 PLACEHOLDER
const routes = require('express').Router();
/* const routes = express.Router(); */
const home = '/teamActivites/09';
console.log(`Accessed ${__filename}`);

routes.get('/', (req, res, next) => {
    res.render('pages/teamActivites/ta09', {
        title: 'Team Activity 09',
        path: '/ta09', // For EJS 
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