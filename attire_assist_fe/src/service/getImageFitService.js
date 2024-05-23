import Axios from 'axios';

export const getImageFitService = async(baseUrl) => {
    var requestBody = {
        image: baseUrl
    }

    const response = await Axios.get({
        url: "http://localhost:3000/glam/fitForImage",
        data: requestBody,
    })

    return response.data;
}