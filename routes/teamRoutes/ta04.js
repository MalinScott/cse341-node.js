//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/teamActivites/ta04', { 
        title: 'Team Activity 04', 
        path: '/ta04', // For EJS 
    });
});

module.exports = router;