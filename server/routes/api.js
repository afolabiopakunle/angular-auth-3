const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API Page')
})


module.exports = router;


