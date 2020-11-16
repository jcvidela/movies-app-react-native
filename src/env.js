let env = process.env.NODE_ENV;
let baseURL = '';

env === 'development' ? baseURL = 'http://192.168.100.224:3000' : baseURL = 'http://localhost:3000';

export default baseURL;
