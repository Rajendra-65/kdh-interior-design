import axios from 'axios';

export type signUpDataType = {
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
}

export type resetDataType = {
    email: string;
    password: string;
}

export const signUpUser = async (signUpData: signUpDataType) => {
    try {

        const { data } = await axios.post('/api/create-user', signUpData)
        return data.user;
    } catch (error) {
        console.log(error)
    }
}

export type logInDataType = {
    email: string;
    password: string;
}

export const logInUser = async (logInData: logInDataType) => {
    try {

        const { data } = await axios.post('/api/logIn-user', JSON.stringify(logInData), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const resetPassword = async (resetData: resetDataType) => {
    try {
        const { data } = await axios.put('/api/reset-password', JSON.stringify(resetData), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data
    }catch(e){
        console.log(e)
    }
    
}