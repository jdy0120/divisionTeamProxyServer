import { API_URL,API_KEY } from '../assets/config';
import fetch from 'node-fetch'

export const getUserAccountId = async(userId:any) => {
    const response = await(await fetch(`${API_URL}/lol/summoner/v4/summoners/by-name/${encodeURI(userId)}?api_key=${API_KEY}`)).json();
    console.log('response>>>',response);
    
    if (response.status) {
        throw new Error(response.status.message)
    }
    return response;
}

export const getUserInfo = async(id:any) => {
    const response = await(await fetch(`${API_URL}/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`)).json();
    console.log('response>>>',response);
    
    if (response.status) {
        throw new Error(response.status.message)
    }
    return response;
}