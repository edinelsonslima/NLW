import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.10.7:4000"
}) 