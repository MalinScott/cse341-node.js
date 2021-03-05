//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const routes = require('express').Router();
/* const routes = express.Router(); */
const home = '/teamActivites/02';
console.log(`Accessed ${__filename}`);

routes.get('/', (req, res, next) => {
    res.render('pages/teamActivites/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS 
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