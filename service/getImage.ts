import axios from 'axios'

export const getInteriorImage = async () => {
    const response = await axios.get('/api/getImage/interior')
    return response.data.images;
}

export const getLighteningImage = async () => {
    const response = await axios.get('/api/getImage/lightening')
    return response.data.images;
}

export const getOutroImage = async () => {
    const response = await axios.get('/api/getImage/outro')
    return response.data.images;
}

export const getAnimationImage = async () => {
    const response = await axios.get('/api/getImage/animation')
    return(response.data.images)
}

export const getApprovalImage= async () => {
    const response = await axios.get('/api/getImage/approval')
    return(response.data.images)
}

export const getArchitectureImage= async () => {
    const response = await axios.get('/api/getImage/architecture')
    return(response.data.images)
}

export const getConsultationImage = async () => {
    const response = await axios.get('/api/getImage/consultation')
    return(response.data.images)
}

export const getDesignImage = async () => {
    const response = await axios.get('/api/getImage/design')
    return(response.data.images)
}

export const getElevationImage = async () => {
    const response = await axios.get('/api/getImage/elevation')
    return(response.data.images)
}

export const getEstmiationImage = async () => {
    const response = await axios.get('/api/getImage/estimation')
    return(response.data.images)
}

export const getPlanningImage= async () => {
    const response = await axios.get('/api/getImage/planning')
    return(response.data.images)
}

export const getSupervisionImage= async () => {
    const response = await axios.get('/api/getImage/supervision')
    return(response.data.images)
}

export const getThreed= async () => {
    const response = await axios.get('/api/getImage/three-d')
    return(response.data.images)
}