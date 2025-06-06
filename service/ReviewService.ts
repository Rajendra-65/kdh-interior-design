import axios from "axios"

interface ReviewDataProps {
    username : string,
    email : string,
    message : string,
    rate : number
}

interface startProjectDataProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export const createReview = async (reviewData : ReviewDataProps) => {
    const response = await axios.post('/api/create-review',JSON.stringify(reviewData),{
        headers:{
            "Content-Type" : "application/json"
        }
    })
    return response.data
}

export const getReviews = async () => {
    const response = await axios.get('/api/get-review')
    return response.data
}

export const startProject = async (values:startProjectDataProps) => {
    const response = await axios.post('/api/start-project',JSON.stringify(values),{
        headers:{
            "Content-Type" : "application/json"
        }
    })
    return response.data
}