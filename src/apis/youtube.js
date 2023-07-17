import axios from 'axios';
const KEY = 'AIzaSyDemKd7U-Ry7GFegulpbijgCA5Dmk09-Tg'; // mention your youtube API key here
//instance of axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
            
        
        maxResults: 10,
        key: KEY
    }
})