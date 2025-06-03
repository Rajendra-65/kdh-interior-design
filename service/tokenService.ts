import {jwtDecode} from 'jwt-decode'

export const getUserId = async () => {
    try{
        const token = localStorage.getItem('KHDauthToken');
        const decodedToken = jwtDecode(token as string);
        //@ts-expect-error  _id is not defined in the type
        const userId = decodedToken._id;
        return userId;
    }catch(error){
        console.log(error)
    }
}

export const checkAuth = ():boolean => {
    try{
        const token = window.localStorage.getItem('KHDauthToken')
        return token ? true : false;
    }catch(e){
        console.log(e)
        return false
    }
}