

export const server = {
    
    url : process.env.REACT_APP_SERVER_URL_PROTOCOL + '://' + process.env.REACT_APP_SERVER_URL_URI,
    api: process.env.REACT_APP_SERVER_API_PROTOCOL + '://' + process.env.REACT_APP_SERVER_API_URI,
    
}

export const auth ={
    token: process.env.REACT_APP_AUTH_TOKEN
}