//Prove01 PLACEHOLDER
const express = require('express');
const router = express.Router();
const home = '/proveAssignments/09';

router.get('/',(req, res, next) => {
    res.render('pages/proveAssignments/prove09', { 
        title: 'Prove Assignment 09', 
        path: '/prove09', //  EJS 
    });
});

module.exports = router;