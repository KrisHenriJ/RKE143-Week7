const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
});

router.post('/rke', (req, res) => {

    if(req.body.name !== 'rke' || req.body.code !== "143") {
        res.status(200).json({broccoliData}); 
    } else {
        res.status(200).json({message: 'invalid credentials'});
    }
});


module.exports = router;