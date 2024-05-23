
const sizeFitRecommendationService = (req, res) => {

    let BAI;
    let fitResponse;
    if (req.body.gender == "male") {
        BAI = (req.body.hip / Math.pow(req.body.height, 1.5)) - 18;
        if (BAI < 21) {
            fitResponse = {
                fit: "Slim fit"
            }
        }
        else if (req.body.chest > req.body.waist && req.body.chest > req.body.hip && req.body.hip > req.body.waist) {
            fitResponse = {
                fit: "Muscular fit"
            }
        }
        else if (BAI <= 33 && BAI > 21) {
            if (req.body.chest >= req.body.waist) {
                fitResponse = {
                    fit: "Normal fit"
                }
            }
            else {
                fitResponse = {
                    fit: "Plus size fit"
                }
            }
        }
        else if (BAI > 33) {
            fitResponse = {
                fit: "Plus size fit"
            }
        }
    }
    else if (req.body.gender == "female") {
        let BWR = req.body.bust / req.body.waist
        let WHR = req.body.waist / req.body.hip

        if (BWR < 0.75 && WHR < 0.80) {
            fitResponse = {
                fit: "Slim fit"
            }
        }
        else if ((BWR < 0.85 && BWR >= 0.75) && (WHR < 0.85 && WHR >= 0.80)) {
            fitResponse = {
                fit: "Normal fit"
            }
        }
        else if (BWR >= 0.85 && WHR >= 0.85) {
            fitResponse = {
                fit: "Plus size fit"
            }
        }
    }
    return fitResponse;
}

const imageToFitRecommendationService = ()=>{
    
}

const base64toImage = (image) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            const baseURL = reader.result;
            resolve(baseURL);
        };
        reader.onerror = reject;
    })
}

module.exports = { sizeFitRecommendationService }