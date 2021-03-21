const routes = require('express').Router();
const projectController = require('../../controllers/project/axios');



routes
      .use('/getUser', projectController.getData)
      .use('/registerUser', projectController.postData)
      //.use('/Company-Stock', projectController.getCompany)

      /*********************************************** 
       *  GET REQUESTS
      ************************************************/

      .get('/Company-Stock', projectController.getCompany)
      .get('/', (req, res, next) => {
            res.render('pages/project/', {
                  pageTitle: 'Stocks',
                  path: "/project02",
                  data: null
            });
      });

      /*********************************************** 
       *  POST REQUESTS
      ************************************************/


module.exports = routes;