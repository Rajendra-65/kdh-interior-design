import axios from "axios"

export const sendMessage = async (name:string, email:string, message:string) => {
    try{
        console.log("send message service")
        console.log(name,email,message)
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