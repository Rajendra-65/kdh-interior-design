import axios from "axios"

interface ReviewDataProps {
    username : string,
    email : string,
    message : string
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