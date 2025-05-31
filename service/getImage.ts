import axios from 'axios'

export const getInteriorImage = async () => {
    const response = await axios.get('/api/getImage/interior')
    console.log(response.data.images)
    return response.data.images;
}

export const getLighteningImage = async () => {
    const response = await axios.get('/api/getImage/lightening')
    console.log(response.data.images)
    return response.data.images;
}

export const getOutroImage = async () => {
    const response = await axios.get('/api/getImage/outro')
    console.log(response.data.images)
    return response.data.images;
}