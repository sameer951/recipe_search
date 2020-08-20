import axios from 'axios';

export class AxiosService {
    static baseUrl = "/assets";

    static httpGet(url, body = {}) {
        url = this.baseUrl + url;
        return axios.get(url, body).then((res) => { return Promise.resolve(res.data) }, (err) => { return Promise.reject(err) });
    }
    static httpPost(url, body = {}) {
        url = this.baseUrl + url;
        return axios.post(url, body).then((res) => { return Promise.resolve(res.data) }, (err) => { return Promise.reject(err) });
    }
    static httpDGet(url, body = {}) {
        return axios.get(url, body).then((res) => { return Promise.resolve(res.data) }, (err) => { return Promise.reject(err) });
    }
    static httpDPost(url, body = {}) {
        return axios.post(url, body).then((res) => { return Promise.resolve(res.data) }, (err) => { return Promise.reject(err) });
    }

}