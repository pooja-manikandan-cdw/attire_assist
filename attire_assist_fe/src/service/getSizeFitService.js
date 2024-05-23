import Axios from 'axios';

export const getSizeFitService = async(data) => {
    const response = await Axios.get({
        url: "http://localhost:3000/glam/fit",
        data: data,
    })

    return response.data;
}