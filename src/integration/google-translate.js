export const sendRequest = async (endpoin = '', method, reqData) => {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2' + endpoin;
    const options = {
        method: method,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'masukkan-api-key-disini',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams(reqData)
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result.data
}