import axios from 'axios';

export type signUpDataType = {
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
}

export const signUpUser = async (signUpData:signUpDataType) => {
    try{
        
        const {data} = await axios.post('/api/create-user',signUpData)
        console.log(data.user)
        return data.user;
    }catch(error){
        console.log(error)
    }
}

export type logInDataType = {
    email:string;
    password:string;
}

export const logInUser = async (logInData:logInDataType) => {
    try{
        
        const {data} = await axios.post('/api/logIn-user',JSON.stringify(logInData),{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(data)
        if(!data.success){  
            console.log(data.user)
        }
        return data;
    }catch(error){
        console.log(error)
    }
}