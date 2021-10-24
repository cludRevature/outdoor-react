import axios from 'axios'

// Create instance called instance
const instance = axios.create({
    baseURL: 'http://localhost:8090'
});

export default {
    getData: () =>
    instance({
        'method':'GET',
        'url':'/data',
        'params': {
            'search':'parameter',
        },
    }),
    postData: () =>
    instance({
        'method': 'POST',
        'url':'/data',
        'data': {
            'item1':'data1',
            'item2':'item2'
        }
    })
}