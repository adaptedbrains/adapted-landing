import axios from 'axios';

export const instance = axios.create({
    baseURL: FRONTEND_BASE_URL,
    timeout: process.env.REQUEST_TIMEOUT || 50000,
});
instance.defaults.headers["Session-Token"] = 'lsjdhfGHDHKUYWEBNBMkuLJHKSDGYUIEBKJHkjhkjhDSBDKBK';
instance.defaults.headers["Authentication"] = 'lsjdhfGHDHKUYWEBNBMkuLJHKSDGYUIEBKJHkjhkjhDSBDKBK';

export function setAuthorizationToken(user) {
}

export const makeHttpRequest = config => axios
        .request({
            method: config.method || 'GET',
            baseURL: config.baseURL ? config.baseURL : FRONTEND_BASE_URL,
            url: config.url,
            data: config.data,
            headers: config.headers ? config.headers : {},
            params: config.params,
            timeout: process.env.REQUEST_TIMEOUT || 50000,
            responseType: config.responseType ? config.responseType : 'json',
        })
        .then(res => res)
        .catch((err) => {
            throw new Error(err);
        });

export default instance;
