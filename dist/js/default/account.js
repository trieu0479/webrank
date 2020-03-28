function getUserToken(){
    return Cookies.get('userToken');
}
function setUserToken(){
    Cookies.set('userToken', 'cHhZeE1KcFQvSis0K2VrN3kxMm1oQT09OjpxzF1Po19uXTHZBqnUT9hb');
}

const userToken = getUserToken();