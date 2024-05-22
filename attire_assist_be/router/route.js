const express = require('express');
const router = express.Router();
const {fitRecommendationWithSize} = require('../controllers/fitController')

router.get("/fit",fitRecommendationWithSize);

module.exports = router;