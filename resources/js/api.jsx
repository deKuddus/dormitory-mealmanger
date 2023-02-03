import axios from 'axios';

const reqData = {
    method: 'GET',
    url: '',
    queryParams: {},
    formData: {},
};

const makeHeaders = ()=>{
    return {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
}


export const defaultApi = (URL, method, details) => {

    let config = {
        baseURL: URL,
        headers: makeHeaders(),
    };

    if (method.toLowerCase() === 'get') config['params'] = details;

    const api = axios.create(config);

    let requestDetails = { ...reqData };
    requestDetails.method = method;
    requestDetails.data = details;

    return apiCall(api, requestDetails)
        .then((response) => response)
        .catch((error) => error);
}

async function apiCall(api, requestDetails) {

    let apiReturn = {
        response: undefined,
        error: undefined,
    };

    try {
        const data = await api(requestDetails);
        apiReturn = { ...apiReturn, response: data };
    } catch (error) {
        apiReturn = { ...apiReturn, error: error && error.response };
    }
    return apiReturn;
}
