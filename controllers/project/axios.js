const axios = require('axios').default;
const bodyParser = require('body-parser');
const { response } = require('express');

exports.getData = (req, res, next) => {
   axios.get('https://reqres.in/api/users')
      .then(response => {
         console.log(response.data);
         var responseData = JSON.stringify(response.data);
         res.render('pages/project/', {
            pageTitle: 'Stocks',
            path: "/getUser",
            data: responseData
         });
      }).catch(err => {
         console.log(err);
      })

}

exports.postData = (req, res, next) => {
   
   axios.post('https://reqres.in/api/register', {
      email: "eve.holt@reqres.in",
      password: "pistol"
   })
      .then(response => {
         var responseData = null;
         console.log(response.data);
         var responseData = JSON.stringify(response.data);
         console.log("USER ID: " + responseData)
         res.render('pages/project/', {
            pageTitle: 'Stocks',
            path: "/registerUser",
            data: responseData
         });
      }).catch(err => {
         console.log(err);
      })

}