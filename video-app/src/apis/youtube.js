import axios from 'axios';

const KEY = 'AIzaSyAhG9VzKLNCF3o94XD7laSiyG48Og4UwPE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});





