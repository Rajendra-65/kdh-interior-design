import axios from "axios"

export const sendMessage = async (name:string, email:string, message:string) => {
    try{
        const response = await axios.post('/api/send-message',{
            name,
            email,
            message
        },{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return response.data
    }catch(error){
        console.error("Error sending message:",error)
    }
}

export const callbackRequest = async (email:string, phone:string) => {
    try{
        const response = await axios.post('/api/call-back',{
            email,
            phone
        },{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return response.data
    }catch(error){
        console.error("Error sending message:",error)
    }
}