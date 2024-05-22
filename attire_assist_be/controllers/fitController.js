const {returnResponse} = require('../constant/responseConstant');
const {sizeFitRecommendationService} = require('../service/fitService');


const fitRecommendationWithSize = async(req,res)=>{

    let responseData;
    try{
        let fitData = await sizeFitRecommendationService(req,res);
        responseData = returnResponse("SUCCESS",fitData,200);
    }
    catch(err){
        responseData = returnResponse("ERROR",err,400);
    }
    res.status(responseData.code).send(responseData.message);
}

const fitRecommendationWithType = async(req,res)=>{

    let responseData;
    try{
        let fitData = await sizeFitRecommendationService(req,res);
        responseData = returnResponse("SUCCESS",fitData,200);
    }
    catch(err){
        responseData = returnResponse("ERROR",err,400);
    }
    res.status(responseData.code).send(responseData.message);
}

module.exports = {fitRecommendationWithSize}