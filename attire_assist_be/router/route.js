const express = require('express');
const router = express.Router();
const {fitRecommendationWithSize,fitRecommendationWithImage} = require('../controllers/fitController')

router.get("/fit",fitRecommendationWithSize);
router.get("/fitForImage",fitRecommendationWithImage);

module.exports = router;