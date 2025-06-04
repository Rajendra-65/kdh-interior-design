import axios from "axios"

interface ReviewDataProps {
    username : string,
    email : string,
    message : string,
    rate : number
}

export const createReview = async (reviewData : ReviewDataProps) => {
    console.log(reviewData)
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