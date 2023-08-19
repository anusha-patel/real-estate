// axios used to fetch api
import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) =>{
    const { data } = await axios.get((url),{
        headers: {
                'X-RapidAPI-Key': '16c917390bmshd4fc399eec76df6p14fcd4jsnc01133df3855',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
              }

    })
    return data;
}