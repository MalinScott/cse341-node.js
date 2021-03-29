const axios = require('axios').default;
const bodyParser = require('body-parser');
const { response } = require('express');
const url = require('url');

var options = {
   method: 'GET',
   url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
   params: { symbol: 'TSLA' },
   headers: {
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
   }
};

async function getAPIString(company, anInt) {
   options.params = { symbol: company };
   try {
      const response = await axios(options);
      const responseData = response.data;
      console.log("Compnay Name: " + responseData.price.shortName);
      console.log("Compnay Name: " + responseData.price.exchange);
      console.log("Compnay Price: " + (anInt == 1 ? responseData.price.regularMarketPrice.raw : responseData.financialData.currentPrice.raw));
      if (responseData.price.shortName != undefined) {
         return responseData;
      }
      else
         return null;
   } catch (err) {
      console.log(err);
      return null;
   }

}

function apiCallback(callback) {

}

exports.getMain = (req, res, next) => {
   res.render('pages/project/stocks-home', {
      pageTitle: 'Stocks',
      path: '/stocks-homes',
      default: false,
      data: null
   });
}

exports.onLoad = async (req, res, next) => {

   try {
      // check for request
      const queryObject = url.parse(req.url, true).query;
      let reqCompany = null;
      let compPath = "Stocks";
      if (queryObject.companySymbol != undefined) {
         //console.log(queryObject);
         compSym = queryObject.companySymbol;
         compPath = compSym + "-stocks";
         reqCompany = await getAPIString(compSym, 0);
      }
      let company1 = await getAPIString('^GSPC', 1);
      let company2 = await getAPIString('^DJI', 1);
      //console.log("COMPANY 1: " + company1.shortName);
      //console.log("COMPANY 2: " + company2.shortName);
      // check if error code was returned
      if (company1 == undefined || company2 == undefined || reqCompany == undefined) {
         res.render('pages/project/', {
            pageTitle: 'Stocks',
            path: '/stocks-error',
            default: false,
            comp1: company1,
            comp2: company2,
            data: null,
            error: true
         });
      } else {
         // if no error render page
         res.render('pages/project/', {
            pageTitle: compPath,
            path: compPath,
            data: reqCompany,
            comp1: company1,
            comp2: company2,
            default: false,
            error: false
         });

      }
   } catch (err) {
      console.log(err);
   }

}



exports.getCompany = (req, res, next) => {
   const queryObject = url.parse(req.url, true).query;
   console.log(queryObject);
   let compSym = queryObject.companySymbol;
   //let compReig = queryObject.companyRegion;
   options.params = { symbol: compSym }
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
            data: responseData,
            default: false,
            error: false
         });
      }).catch(err => {
         console.log(err);

         res.render('pages/project/', {
            pageTitle: compSym + 'Stocks',
            path: path,
            data: responseData,
            default: false,
            error: true
         });
      })
}

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