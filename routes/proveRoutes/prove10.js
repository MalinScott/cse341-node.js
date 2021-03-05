//Prove01 PLACEHOLDER
const express = require('express');
const router = express.Router();
const home = '/proveAssignments/02';

router.get('/',(req, res, next) => {
    res.render('pages/proveAssignments/prove02', { 
        title: 'Prove Assignment 02', 
        path: '/prove02', // For pug, EJS 
    });
});

module.exports = router;