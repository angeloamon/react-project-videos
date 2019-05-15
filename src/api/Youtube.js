import Axios from 'axios';

const KEY = 'AIzaSyC3CKo-5ojE7yz3E14cLM-QiASXb-bV0xQ';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});