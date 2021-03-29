const routes = require('express').Router();
const projectController = require('../../controllers/project/axios');



routes
      .use('/getUser', projectController.getData)
      .use('/registerUser', projectController.postData)
      //.use('/Company-Stock', projectController.getCompany)

      /*********************************************** 
       *  GET REQUESTS
      ************************************************/
      .use('/stocks-main', projectController.getMain)
      .get('/Company-Stock', projectController.onLoad)
      .get('/', projectController.onLoad);

      /*********************************************** 
       *  POST REQUESTS
      ************************************************/


module.exports = routes;