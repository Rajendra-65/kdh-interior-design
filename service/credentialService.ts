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