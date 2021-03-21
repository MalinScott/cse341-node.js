const axios = require('axios').default;

const { response } = require('express');

exports.getData = (req, res, next) => {
   axios.get('https://reqres.in/api/users')
   .then(response => {
      console.log(response.data);
   }).catch(err => {
      console.log(err);
   })
   res.render('pages/project/', {
      pageTitle: 'Stocks',
      path: "/project02",
      data: response.data
   });
}

exports.postData = (req, res, next) => {
axios.post('https://reqres.in/api/register', {
   email: "eve.holt@reqres.in",
   password: "pistol"
})
.then(response => {
   console.log(response.data);
}).catch(err => {
   console.log(err)
})
res.render('pages/project/', {
   pageTitle: 'Stocks',
   path: "/project02",
   data: response.data
});
}