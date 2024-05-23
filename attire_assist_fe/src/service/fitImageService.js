import fitDressData from "../attireData"

const getFitService = ({attire,fit})=>{
    return fitDressData[fit][attire];
}

export default getFitService;