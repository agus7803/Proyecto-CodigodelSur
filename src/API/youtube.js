import axios from 'axios';

const KEY = 'AIzaSyC7qdPm7aCYuNt_5s_w8QsOGVtVfPvskrE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: 4,
        key: KEY
    }
})