//Prove01 PLACEHOLDER
const express = require('express');
const router = express.Router();
const home = '/proveAssignments/09';
const url = require('url');

router.get('/', (req, res, next) => {
    res.render('pages/proveAssignments/prove09/prove09', {
        title: 'Prove Assignment 09',
        path: '/prove09', //  EJS 
    });
});

router.get('/postal-rate', (req, res, next) => {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    let weight = queryObject.weight;
    let postage = queryObject.postage;
    let zone = null;
    var cost = 0.00;
    for (let i = 0; i <= weight; i++) {
        cost += .20;
        //console.log("Cost: " + cost);
    }
    switch (postage) {
        case "letter_stamped":
            cost += .15;
            //console.log("Cost: " + cost);
            postage = "Letter Stamped";
            break;
        case "letter_metered":
            cost += .31;
            postage = "Letter Metered";
            break;
        case "envelope":
            cost += .80;
            postage = "Large Envelopes";
            break;
        case "service_retail":
            cost += 3.80;
            postage = "First-Class Package Service—Retail";
            break;
        default:
            cost += .20;
            break;

    }
    
    if (req.query.zone != null) {
        zone = req.query.zone;
    }
    res.render('pages/proveAssignments/prove09/prove09-response.ejs', {
        title: 'Prove Assignment 09',
        path: '/prove09/postal-rate', //  EJS 
        weight: weight,
        postage: postage,
        zone: zone,
        cost: cost,
    });
});

module.exports = router;