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
    if (req.query.zone != null) {
        zone = req.query.zone;
    }
    let anAerror = null;
    var cost = 0.00;
    if (weight >= 3.5 && postage != "service_retail" && postage != "envelope") {
        postage = "envelope";
        anError = "Letters Cannot be over 3.5oz Shipping switched to Large Envelope Rates"
    }
    for (let i = 0; i <= weight; i++) {

        if (postage == "service_retail") {
            if (i % 4 == 0) {

                cost += .70;
            }
        } else {
            cost += .20;
        }
        //console.log("Cost: " + cost);
    }
    switch (postage) {
        case "letter_stamped":
            cost += .15;
            //console.log("Cost: " + cost);
            postage = "Letter Stamped";
            break;
        case "letter_metered":
            cost += .11;
            postage = "Letter Metered";
            break;
        case "envelope":
            cost += .60;
            postage = "Large Envelopes";
            break;
        case "service_retail":
            if (weight < 5) {
                cost += 3.30;
            }
            else {
                cost += 3.40;

            }
            postage = "First-Class Package Service—Retail";
            if (zone == 3) {
                cost += .10;
            } else if (zone == 4) {
                cost += .15;
            }
            break;
        default:
            cost += .20;
            break;

    }


    res.render('pages/proveAssignments/prove09/prove09-response.ejs', {
        title: 'Prove Assignment 09',
        path: '/prove09/postal-rate', //  EJS 
        weight: weight,
        postage: postage,
        zone: zone,
        cost: cost.toFixed(2),
    });
});

module.exports = router;