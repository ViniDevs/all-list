import axios from 'axios';

    const api = axios.create({
        baseURL: 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    });

    export default api;
