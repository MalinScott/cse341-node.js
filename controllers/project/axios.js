const axios = require('axios').default;
const bodyParser = require('body-parser');
const { response } = require('express');
const url = require('url');

var options = {
   method: 'GET',
   url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
   params: { symbol: 'TSLA', region: 'US' },
   headers: {
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
   }
};



exports.getCompany = (req, res, next) => {
   const queryObject = url.parse(req.url, true).query;
   console.log(queryObject);
   let compSym = queryObject.companySymbol;
   let compReig = queryObject.companyRegion;
   options.params = { symbol: compSym, region: compReig }
   axios(options)
      .then(response => {
         const path = req.companySymbol + "-stock";
         //console.log(response.data);
         const responseData = response.data;
         console.log("Compnay Name: " + responseData.price.shortName);
         console.log("Compnay Price: " + responseData.financialData.currentPrice.raw);
         res.render('pages/project/', {
            pageTitle: 'Stocks',
            path: path,
            data: responseData
         });
      }).catch(err => {
         console.log(err);
      })
}

/* 
 exports.getCompany = (req, res, next) => {
   axios(options)
   .then(response => {

      //console.log(response.data);
      const responseData = response.data;
      console.log("Compnay Price: " + responseData.financialData.currentPrice.raw);
      res.render('pages/project/', {
         pageTitle: 'Stocks',
         path: "/registerUser",
         data: responseData.financialData.currentPrice.raw
      });
   }).catch(err => {
      console.log(err);
   })
}  */


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