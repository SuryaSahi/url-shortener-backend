const express = require('express')
const {handleNewShortUrl} = require('../controllers/index')
const router = express.Router()
const { GetAnalytics } = require('../controllers/index');

router.post('/' , handleNewShortUrl);
router.get('/analytics/:shortId', GetAnalytics);

module.exports = router;